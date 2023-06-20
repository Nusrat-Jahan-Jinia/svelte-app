import { error } from '@sveltejs/kit';

export const load = async (loadEvent: any) => {
	const { fetch, params, url, route } = loadEvent;
	console.log(params, url, route);
	const { productId } = params;
	if (productId > 12) {
		throw error(404, 'Oh no, Looks like the product is currently unavailable');
	}
	const title = 'People Biodata';
	const response = await fetch(`http://localhost:5173/api/products/${productId}`);
	const product = await response.json();
	return {
		title,
		product
	};
};
