import { json } from '@sveltejs/kit';
import { people } from '$lib/people.js';

export function GET(requestEvent: any) {
	const { params } = requestEvent;
	const { peopleId } = params;

	const product = people.find((product) => product.id === parseInt(peopleId));
	return json(product);
}

export async function PATCH(requestEvent: any) {
	const { params, request } = requestEvent;
	const { productId } = params;
	const { name } = await request.json();
	const product = people.find((product) => product.id === parseInt(productId));
	product.name = name;
	return json(product);
}

export async function DELETE(requestEvent: any) {
	const { params } = requestEvent;
	const { productId } = params;

	const deletedProduct = people.find((product) => product.id === parseInt(productId));
	const index = people.findIndex((product) => product.id === parseInt(productId));
	people.splice(index, 1);
	return json(deletedProduct);
}
