import { fetchProjects } from '$lib/modules/ProjectsProvider';

export async function load({ params }) {
	// let slug = params.slug;

	let projects = await fetchProjects();

	let project = projects.find((project) => project.slug == params.slug);
	return { project };
}
