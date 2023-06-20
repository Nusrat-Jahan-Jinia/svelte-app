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
export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
	const post = String(formData.get('post'));

	const data: Data = {
		success: false,
		errors: {}
	};

	if (!post) {
		data.errors.post = 'required';
		return json(data, { status: 400 });
	}
	addPost(post);
	data.success = true;
	return json(data);
};
