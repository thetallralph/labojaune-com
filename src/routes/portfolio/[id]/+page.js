import { error } from '@sveltejs/kit';
import { projectsData } from '$lib/data/projects.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const project = projectsData[params.id];
	
	if (!project) {
		throw error(404, `Projet non trouvé: ${params.id}`);
	}
	
	return {
		project
	};
}