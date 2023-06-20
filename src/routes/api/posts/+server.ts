import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from '$lib/database';

export const GET: RequestHandler = async (event) => {
	const posts = await db.post.findMany();

	event.setHeaders({
		'Cache-Control': 'max-age=60'
	});
	return json(posts);
};
