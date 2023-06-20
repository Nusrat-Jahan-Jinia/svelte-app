import { json } from '@sveltejs/kit';
import { products } from '$lib/products.js';

export function GET(requestEvent: any) {
	const { params } = requestEvent;
	const { productId } = params;

	const product = products.find((product) => product.id === parseInt(productId));
	return json(product);
}

export async function PATCH(requestEvent: any) {
	const { params, request } = requestEvent;
	const { productId } = params;
	const { name } = await request.json();
	const product = products.find((product) => product.id === parseInt(productId));
	product.name = name;
	return json(product);
}

export async function DELETE(requestEvent: any) {
	const { params } = requestEvent;
	const { productId } = params;

	const deletedProduct = products.find((product) => product.id === parseInt(productId));
	const index = products.findIndex((product) => product.id === parseInt(productId));
	products.splice(index, 1);
	return json(deletedProduct);
}
