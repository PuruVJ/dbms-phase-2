import { supabase } from '$lib/supabase';

/** @type {import('./[id]').RequestHandler} */
export const get = async ({ params }) => {
	const data = (await supabase.from('tickets').select().eq('id', params.id)).data;
	// console.log(params.id);
	return { body: { data: data[0] } };
};
