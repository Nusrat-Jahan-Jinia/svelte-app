export const load = async (loadEvent: any) => {
	const { fetch } = loadEvent;
	const title = 'List of all available products';
	const response = await fetch('http://localhost:5173/api/products');
	const products = await response.json();
	return {
		title,
		products
	};
};
