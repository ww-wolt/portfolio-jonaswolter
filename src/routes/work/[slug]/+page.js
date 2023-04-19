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

	// const CHAR_LIMIT = 20;
	// function trimEllipsis(input) {
	// 	return input.length > CHAR_LIMIT ? `${input.substring(0, CHAR_LIMIT)}…` : input;
	// }

	let seo = {
		title: project.title + ' | ' + project.subtitle,
		description: project.abstract,
		keywords: project.keywords.join(', '),
		image: project.headerImagePath
	};

	return { ...project, seo };
}
