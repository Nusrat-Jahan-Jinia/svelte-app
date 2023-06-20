import { json } from '@sveltejs/kit';
import { people } from '$lib/people.js';

export function GET() {
	return json(people);
}
export async function POST(requestEvent: any) {
	const { request } = requestEvent;
	const { name } = await request.json();
	const newPeople = {
		id: people.length + 1,
		name
	};
	people.push(newPeople);

	return json(newPeople, { status: 201 });
}
