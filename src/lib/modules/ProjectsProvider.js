import { writable } from 'svelte/store';
// import JSSoup from 'jssoup';

// import str from '$lib/projects/dream-of-me.html?raw';
// console.log('🚀 ~ str:', str);

export const projects = new writable();

// var soup = new JSSoup('<html><head>hello</head></html>');
// console.log(soup.find('head'));

export async function fetchProjects() {
	const allFiles = import.meta.glob('/src/lib/projects/*.html', { as: 'raw' });

	const allProjects = await Promise.all(
		Object.entries(allFiles).map(async ([path, resolver]) => {
			const rawHtml = await resolver();
			const slug = path.split('/').at(-1).replace('.html', '');

			// const soup = new JSSoup(rawHtml);
			// const title = soup.find('h1');

			return {
				slug: slug,
				rawHtml: rawHtml
				// title: title
			};
		})
	);
	console.log('🚀 ~ fetchProjects ~ allProjects:', allProjects);
	return allProjects;
}
