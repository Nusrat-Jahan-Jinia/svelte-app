import type { RequestHandler } from '@sveltejs/kit';

//get products
export const GET: RequestHandler = async (event) => {
	const options: ResponseInit = {
		status: 418,
		headers: {
			x: 'Hello nusrat'
		}
	};

	return new Response('Hello', options);
};

//post product

export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const title = data.get('title');

	console.log(title);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
