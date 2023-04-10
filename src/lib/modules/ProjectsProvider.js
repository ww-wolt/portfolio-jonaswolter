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
			rawHtml = rawHtml.replaceAll('../../../static', '');

			// Remove unnecessary whitespaces
			rawHtml = rawHtml.replaceAll('&nbsp;', '');

			const dom = parser.parseFromString(rawHtml);

			// remove styles
			const link = dom.getElementsByTagName('link')[0]?.outerHTML;
			rawHtml = rawHtml.replaceAll(link, '');
			const script = dom.getElementsByTagName('script')[0]?.outerHTML;
			rawHtml = rawHtml.replaceAll(script, '');

			// wrap all h3 into spans
			const h3Nodes = dom.getElementsByTagName('h3');
			h3Nodes.forEach((node) => {
				const adjusted = node.outerHTML.replace(node.innerHTML, `<span>${node.innerHTML}</span>`);
				rawHtml = rawHtml.replace(node.outerHTML, adjusted);
			});

			// wrap all h4 into spans
			const h4Nodes = dom.getElementsByTagName('h4');
			h4Nodes.forEach((node) => {
				const adjusted = node.outerHTML.replace(node.innerHTML, `<span>${node.innerHTML}</span>`);
				rawHtml = rawHtml.replace(node.outerHTML, adjusted);
			});

			// get slug
			const originalSlug = path.split('/').at(-1).replace('.html', '').trim();
			const slug = originalSlug.includes('.') ? originalSlug.split('.').at(-1) : originalSlug;
			const url = `/work/${slug}`;

			// get header-image
			const headerImagePath = dom.getElementById('header-image')?.getAttribute('src').trim();

			// get title & subtitle
			const title = dom.getElementById('title')?.innerHTML.trim();
			const subtitle = dom.getElementById('subtitle')?.innerHTML.trim();

			// get abstract
			const abstract = dom.getElementById('abstract')?.textContent.trim();

			// get keywords
			const keywords = dom
				.getElementById('keywords')
				?.innerHTML.split('</li>')
				.map((token) => token.replaceAll('<li>', '').replaceAll('&nbsp;', '').trim())
				.filter((token) => token != '');

			// get content html
			// const contentHtml = dom.getElementById('content')?.outerHTML;

			return {
				slug,
				url,
				headerImagePath,
				title,
				subtitle,
				abstract,
				keywords,
				rawHtml
			};
		})
	);
	projects = allProjects;
	// console.log('🚀 ~ fetchProjects ~ projects:', projects);
	return projects;
}
