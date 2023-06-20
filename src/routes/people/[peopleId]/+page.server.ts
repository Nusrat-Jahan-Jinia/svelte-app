import { error } from '@sveltejs/kit';

export const load = async (loadEvent: any) => {
	const { fetch, params, url, route } = loadEvent;
	console.log(params, url, route);
	const { peopleId } = params;
	if (peopleId > 12) {
		throw error(404, 'Oh no, Looks like the people is currently unavailable');
	}
	const title = 'People Biodata';
	const response = await fetch(`http://localhost:5173/api/people/${peopleId}`);
	const people = await response.json();
	return {
		title,
		people
	};
};
