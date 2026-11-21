import { fail } from '@sveltejs/kit';
import { envoyerMessageContact } from '$lib/server/mail.js';
import { TYPES_PROJET } from '$lib/data/contact.js';

/** @param {FormDataEntryValue | null} value */
function ligne(value) {
	return (value?.toString() ?? '').replace(/\s+/g, ' ').trim();
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		// Champ invisible : s'il est rempli, c'est un robot. On simule un succès.
		if (ligne(data.get('site'))) return { succes: true };

		const valeurs = {
			nom: ligne(data.get('nom')).slice(0, 120),
			email: ligne(data.get('email')).slice(0, 200),
			telephone: ligne(data.get('telephone')).slice(0, 40),
			entreprise: ligne(data.get('entreprise')).slice(0, 120),
			projet: ligne(data.get('projet')),
			message: (data.get('message')?.toString() ?? '').trim().slice(0, 5000)
		};
		if (!TYPES_PROJET.includes(valeurs.projet)) valeurs.projet = '';

		/** @type {Record<string, string>} */
		const erreurs = {};
		if (!valeurs.nom) erreurs.nom = 'Indiquez votre nom.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valeurs.email))
			erreurs.email = 'Indiquez une adresse e-mail valide pour que nous puissions vous répondre.';
		if (valeurs.message.length < 10) erreurs.message = 'Décrivez votre projet en quelques mots.';

		if (Object.keys(erreurs).length) return fail(400, { ...valeurs, erreurs });

		const envoye = await envoyerMessageContact(valeurs);
		if (!envoye) return fail(500, { ...valeurs, echec: true });

		return { succes: true };
	}
};
