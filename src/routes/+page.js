import { fetchProjects } from '$lib/modules/ProjectsProvider';

export async function load({ params }) {
	let projects = await fetchProjects();
	return { projects };
}
