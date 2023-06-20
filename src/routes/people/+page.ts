export const load = async (loadEvent: any) => {
	const { fetch } = loadEvent;
	const title = 'Our People';
	const response = await fetch('http://localhost:5173/api/products');
	const products = await response.json();
	return {
		title,
		products
	};
};
