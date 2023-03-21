import { writable } from 'svelte/store';
// export const projects = new writable();

import DomParser from 'dom-parser';
const parser = new DomParser();

let projects;

export async function fetchProjects() {
	if (projects) return projects;

	const allFiles = import.meta.glob('/src/lib/projects/*.html', { as: 'raw' });
	const allProjects = await Promise.all(
		Object.entries(allFiles).map(async ([path, resolver]) => {
			let rawHtml = await resolver();

			// adjust image path
			rawHtml = rawHtml.replaceAll('../images', '/src/lib/images');

			const slug = path.split('/').at(-1).replace('.html', '');

			const dom = parser.parseFromString(rawHtml);
			console.log('parsed', dom.getElementById('keywords')?.innerHTML);

			const title = dom.getElementsByTagName('h1')[0]?.innerHTML;
			const subtitle = dom.getElementsByTagName('h2')[0]?.innerHTML;

			return {
				slug: slug,
				title: title,
				subtitle: subtitle,
				rawHtml: rawHtml
			};
		})
	);
	projects = allProjects;
	return projects;
}
