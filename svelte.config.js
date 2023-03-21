import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'edge',
			regions: 'all'
		}),
		prerender: {
			entries: ['/work/dream-of-me', '/work/dont-answer-be-happy']
		}
	},
	preprocess: vitePreprocess()
};

export default config;
