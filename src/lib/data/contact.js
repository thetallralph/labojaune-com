/** Adresse affichée sur le site. */
export const CONTACT_EMAIL = 'ralph@labojaune.com';

/** Toutes les adresses qui reçoivent les messages envoyés depuis le site. */
export const CONTACT_RECIPIENTS = [CONTACT_EMAIL, 'ralphorie@gmail.com'];

/** Lien `mailto:` qui écrit à toutes les adresses à la fois. */
export const CONTACT_MAILTO = `mailto:${CONTACT_RECIPIENTS.join(',')}`;

/** Choix proposés dans le formulaire de contact. */
export const TYPES_PROJET = [
	'Site web',
	'Application web ou mobile',
	'Logiciel sur mesure',
	'Design / identité visuelle',
	'Autre'
];
