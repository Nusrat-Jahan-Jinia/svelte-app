import { json } from '@sveltejs/kit'
import { products } from '$lib/products.js'

export function GET() {
	return json(products)
}
export async function POST(requestEvent: any) {
	const { request } = requestEvent
	const { name } = await request.json()
	const newProduct = {
		id: products.length + 1,
		name
	}
	products.push(newProduct)

	return json(newProduct, { status: 201 })
}
