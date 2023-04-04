export const prerender = false;

import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	throw redirect(307, '/');
}
