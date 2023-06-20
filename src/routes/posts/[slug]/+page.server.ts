import { error, type RequestHandler } from '@sveltejs/kit';
import type { PageServerData } from '../$types';
import db from '$lib/database';
import { json } from '@sveltejs/kit';

export const load: PageServerData = async ({ params }) => {
	const post = await db.post.findUnique({
		where: { slug: params.slug }
	});
	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
};

type Data = {
	success: boolean;
	errors: Record<string, string>;
};
