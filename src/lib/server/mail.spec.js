import { describe, it, expect, vi, beforeEach } from 'vitest';

const env = vi.hoisted(() => /** @type {Record<string, string | undefined>} */ ({}));
vi.mock('$env/dynamic/private', () => ({ env }));

const { composerMessage, envoyerMessageContact, parseSender } = await import('./mail.js');

const message = {
	nom: 'Awa <b>Diallo</b>',
	email: 'awa@exemple.com',
	telephone: '+229 01 00 00 00',
	entreprise: '',
	projet: 'Site web',
	message: 'Bonjour,\nnous voulons un site.'
};

describe('composerMessage', () => {
	it('échappe la saisie dans le HTML et omet les champs vides', () => {
		const { subject, text, html } = composerMessage(message);
		expect(subject).toBe('Nouveau message de Awa <b>Diallo</b> · Site web');
		expect(html).toContain('Awa &lt;b&gt;Diallo&lt;/b&gt;');
		expect(html).not.toContain('<b>Diallo</b>');
		expect(text).not.toContain('Entreprise');
		expect(text).toContain('nous voulons un site.');
	});
});

describe('parseSender', () => {
	it('sépare le nom et l’adresse', () => {
		expect(parseSender('Labo Jaune <site@labojaune.com>')).toEqual({
			name: 'Labo Jaune',
			address: 'site@labojaune.com'
		});
		expect(parseSender('site@labojaune.com')).toEqual({ address: 'site@labojaune.com' });
	});
});

describe('envoyerMessageContact', () => {
	beforeEach(() => {
		for (const k of Object.keys(env)) delete env[k];
	});

	it('ne fait rien sans fournisseur configuré', async () => {
		const fetchFn = vi.fn();
		expect(await envoyerMessageContact(message, fetchFn)).toBe(false);
		expect(fetchFn).not.toHaveBeenCalled();
	});

	it('passe par ZeptoMail en priorité, avec les deux adresses et la réponse au visiteur', async () => {
		env.ZEPTOMAIL_API_KEY = 'Zoho-enczapikey jeton-test';
		env.RESEND_API_KEY = 'cle-test';
		env.CONTACT_FROM = 'Labo Jaune <site@flotpilot.com>';
		const fetchFn = vi.fn(async () => new Response('{}', { status: 201 }));
		expect(await envoyerMessageContact(message, fetchFn)).toBe(true);

		const [url, init] = /** @type {any} */ (fetchFn.mock.calls[0]);
		const body = JSON.parse(init.body);
		expect(url).toBe('https://api.zeptomail.com/v1.1/email');
		expect(init.headers.authorization).toBe('Zoho-enczapikey jeton-test');
		expect(body.from).toEqual({ name: 'Labo Jaune', address: 'site@flotpilot.com' });
		expect(body.to).toEqual([
			{ email_address: { address: 'ralph@labojaune.com' } },
			{ email_address: { address: 'ralphorie@gmail.com' } }
		]);
		expect(body.reply_to).toEqual([{ address: 'awa@exemple.com', name: message.nom }]);
		expect(body.textbody).toContain('nous voulons un site.');
	});

	it('renvoie false si ZeptoMail refuse', async () => {
		env.ZEPTOMAIL_API_KEY = 'mauvais';
		const fetchFn = vi.fn(async () => new Response('{"error":"invalid"}', { status: 401 }));
		vi.spyOn(console, 'error').mockImplementation(() => {});
		expect(await envoyerMessageContact(message, fetchFn)).toBe(false);
	});

	it('se rabat sur Resend sans ZeptoMail', async () => {
		env.RESEND_API_KEY = 'cle-test';
		const fetchFn = vi.fn(async () => new Response('{"id":"1"}', { status: 200 }));
		expect(await envoyerMessageContact(message, fetchFn)).toBe(true);

		const [url, init] = /** @type {any} */ (fetchFn.mock.calls[0]);
		const body = JSON.parse(init.body);
		expect(url).toBe('https://api.resend.com/emails');
		expect(init.headers.authorization).toBe('Bearer cle-test');
		expect(body.to).toEqual(['ralph@labojaune.com', 'ralphorie@gmail.com']);
		expect(body.reply_to).toBe('awa@exemple.com');
		expect(body.from).toBe('Labo Jaune <site@labojaune.com>');
	});

	it('renvoie false si Resend refuse', async () => {
		env.RESEND_API_KEY = 'cle-test';
		const fetchFn = vi.fn(async () => new Response('{"message":"invalid"}', { status: 403 }));
		vi.spyOn(console, 'error').mockImplementation(() => {});
		expect(await envoyerMessageContact(message, fetchFn)).toBe(false);
	});
});
