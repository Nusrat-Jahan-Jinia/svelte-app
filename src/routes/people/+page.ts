export const load = async (loadEvent: any) => {
	const { fetch } = loadEvent;
	const title = 'Our People';
	const response = await fetch('http://localhost:5173/api/people');
	const people = await response.json();
	return {
		title,
		people
	};
};
