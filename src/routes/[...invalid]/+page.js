// Catch all route
// Redirect all links that don't match on of the other routes to home

export const prerender = false;

import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	throw redirect(307, '/');
}
