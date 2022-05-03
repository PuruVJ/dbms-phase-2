import { supabase } from '$lib/supabase';

/** @type {import('./book').RequestHandler} */
export const post = async ({ request }) => {
	const form = await request.formData();
	console.log(form.get('movie_date'));

	await supabase.from('tickets').insert({
		movie_time: new Date(`${form.get('movie_date')} ${form.get('movie_time')}`).toISOString(),
		screen_name: form.get('screen_name'),
		seat_no: form.get('seat_no'),
		theatre: form.get('theatre'),
		email: form.get('email')
	});

	return {};
};
