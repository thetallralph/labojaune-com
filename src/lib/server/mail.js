import { env } from '$env/dynamic/private';
import { CONTACT_RECIPIENTS } from '$lib/data/contact.js';

/*
  Envoi des messages du formulaire de contact.
  - ZEPTOMAIL_API_KEY : jeton ZeptoMail (même compte que Flot Pilot). Prioritaire.
  - RESEND_API_KEY : clé Resend, utilisée seulement si ZeptoMail n'est pas configuré.
  - CONTACT_FROM : expéditeur, sur un domaine vérifié chez le fournisseur.
    Par défaut « Labo Jaune <site@labojaune.com> ».
  Les destinataires sont dans `$lib/data/contact.js`.
*/

const EXPEDITEUR_PAR_DEFAUT = 'Labo Jaune <site@labojaune.com>';

/**
 * Échappe une saisie de visiteur avant de l'insérer dans un e-mail HTML.
 * @param {unknown} value
 */
function escapeHtml(value) {
	return String(value ?? '').replace(
		/[&<>"']/g,
		(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c
	);
}

/**
 * @typedef {object} MessageContact
 * @property {string} nom
 * @property {string} email
 * @property {string} telephone
 * @property {string} entreprise
 * @property {string} projet
 * @property {string} message
 */

/**
 * Construit le texte et le HTML de l'e-mail.
 * @param {MessageContact} m
 */
export function composerMessage(m) {
	const lignes = /** @type {[string, string][]} */ ([
		['Nom', m.nom],
		['E-mail', m.email],
		['Téléphone', m.telephone],
		['Entreprise', m.entreprise],
		['Type de projet', m.projet]
	]).filter(([, v]) => v);

	const subject = `Nouveau message de ${m.nom}${m.projet ? ` · ${m.projet}` : ''}`;

	const text = [
		...lignes.map(([k, v]) => `${k} : ${v}`),
		'',
		m.message,
		'',
		'Envoyé depuis le formulaire de labojaune.com. Répondez directement à cet e-mail.'
	].join('\n');

	const html = `<!doctype html><html lang="fr"><body style="margin:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#0a0a0a">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden">
<tr><td style="background:#FFD700;padding:20px 28px;font-size:20px;font-weight:bold">Nouveau message du site</td></tr>
<tr><td style="padding:24px 28px">
<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:15px;line-height:1.5">
${lignes
	.map(
		([k, v]) =>
			`<tr><td style="padding:2px 16px 2px 0;color:#666;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:2px 0">${escapeHtml(v)}</td></tr>`
	)
	.join('\n')}
</table>
<div style="margin-top:20px;padding-top:20px;border-top:1px solid #eee;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(m.message)}</div>
</td></tr>
<tr><td style="padding:16px 28px;background:#fafafa;font-size:12px;color:#888">Envoyé depuis le formulaire de labojaune.com. Répondez directement à cet e-mail.</td></tr>
</table></td></tr></table></body></html>`;

	return { subject, text, html };
}

/**
 * « Labo Jaune <site@labojaune.com> » → { name, address } ; une adresse nue passe telle quelle.
 * @param {string} from
 * @returns {{ name?: string, address: string }}
 */
export function parseSender(from) {
	const m = from.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
	if (!m) return { address: from.trim() };
	return m[1]
		? { name: m[1].replace(/^"|"$/g, ''), address: m[2].trim() }
		: { address: m[2].trim() };
}

/**
 * Prépare la requête HTTP du fournisseur configuré, ou `null` si aucun ne l'est.
 * @param {MessageContact} m
 * @returns {{ fournisseur: string, url: string, init: RequestInit } | null}
 */
export function requeteEnvoi(m) {
	const from = env.CONTACT_FROM || EXPEDITEUR_PAR_DEFAUT;
	const { subject, text, html } = composerMessage(m);

	if (env.ZEPTOMAIL_API_KEY) {
		// La console Zepto affiche le jeton précédé de « Zoho-enczapikey » : on accepte les deux formes.
		const token = env.ZEPTOMAIL_API_KEY.trim().replace(/^Zoho-enczapikey\s+/i, '');
		return {
			fournisseur: 'ZeptoMail',
			url: 'https://api.zeptomail.com/v1.1/email',
			init: {
				method: 'POST',
				headers: {
					authorization: `Zoho-enczapikey ${token}`,
					'content-type': 'application/json',
					accept: 'application/json'
				},
				body: JSON.stringify({
					from: parseSender(from),
					to: CONTACT_RECIPIENTS.map((address) => ({ email_address: { address } })),
					reply_to: [{ address: m.email, name: m.nom }],
					subject,
					textbody: text,
					htmlbody: html
				})
			}
		};
	}

	if (env.RESEND_API_KEY) {
		return {
			fournisseur: 'Resend',
			url: 'https://api.resend.com/emails',
			init: {
				method: 'POST',
				headers: {
					authorization: `Bearer ${env.RESEND_API_KEY}`,
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					from,
					to: CONTACT_RECIPIENTS,
					reply_to: m.email,
					subject,
					text,
					html
				})
			}
		};
	}

	return null;
}

/**
 * Envoie le message à toutes les adresses de contact.
 * Renvoie `false` (sans lever d'erreur) si l'envoi échoue ou si rien n'est configuré.
 * @param {MessageContact} m
 * @param {typeof fetch} [fetchFn]
 */
export async function envoyerMessageContact(m, fetchFn = fetch) {
	const requete = requeteEnvoi(m);
	if (!requete) {
		console.error('Formulaire de contact : ni ZEPTOMAIL_API_KEY ni RESEND_API_KEY configurée');
		return false;
	}

	try {
		const r = await fetchFn(requete.url, requete.init);
		if (!r.ok) {
			const detail = await r.text().catch(() => '');
			console.error(`Formulaire de contact : ${requete.fournisseur} HTTP ${r.status}`, detail);
			return false;
		}
		return true;
	} catch (err) {
		console.error(`Formulaire de contact : envoi ${requete.fournisseur} impossible`, err);
		return false;
	}
}
