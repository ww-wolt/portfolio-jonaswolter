import { redirect } from '@sveltejs/kit';

import { fetchProjects } from '$lib/modules/ProjectsProvider';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let projects = await fetchProjects();

	let project = projects.find((project) => project.slug == params.slug);

	if (!project) {
		throw redirect(307, '/work');
		// throw error(400, 'oh no how bad');
	}

	return { ...project };
}
