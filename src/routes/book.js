import { supabase } from '$lib/supabase';
import nodemailer from 'nodemailer';

/** @type {import('./book').RequestHandler} */
export const post = async ({ request }) => {
	const form = await request.formData();

	const req = await supabase.from('tickets').insert({
		movie_time: new Date(`${form.get('movie_date')} ${form.get('movie_time')}`).toISOString(),
		screen_name: form.get('screen_name'),
		seat_no: form.get('seat_no'),
		theatre: form.get('theatre'),
		email: form.get('email')
	});

	// @ts-ignore
	const id = req.data[0].id;

	// First send the email
	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass // generated ethereal password
		}
	});

	transporter.sendMail({
		from: 'noreply@thebatman.com', // sender address
		to: form.get('email') + '', // list of receivers
		subject: 'Your Batman ticket', // Subject line
		html: `<p>here is your code: <a href="https://dbms-phase-2.vercel.app/ticket/${id}">https://dbms-phase-2.vercel.app/ticket/${id}</a></p>`
	});

	return { body: { id } };
};
