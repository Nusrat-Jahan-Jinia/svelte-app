import type { Actions, PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

import db from '$lib/database';

export const load: PageServerLoad = async ({ params }) => {
	const post = await db.post.findUnique({
		where: { slug: params.slug }
	});

	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
};
