<script>
	import { page } from '$app/stores';
	import { enhance } from '$lib/form';
</script>

<svelte:head>
	<title>Book ticket</title>
</svelte:head>

<form
	class="new"
	action="/ticket/{$page.params.id}"
	method="post"
	use:enhance={{
		result: async ({ form }) => {
			console.log(form);
			// form.reset();
		}
	}}
>
	<label>
		Date
		<input type="date" name="movie_date" aria-label="Choose date" placeholder="Movie date" />
	</label>

	<br /><br />

	<label>
		Time
		<input type="time" name="movie_time" aria-label="Choose time" placeholder="Movie time" />
	</label>

	<br /><br />

	<label>
		Screen name
		<input type="text" name="screen_name" aria-label="Screen name" placeholder="Screen name" />
	</label>

	<br /><br />

	<label>
		Seat no
		<input type="text" name="seat_no" aria-label="Seat no" placeholder="Seat no" />
	</label>

	<br /><br />

	<label>
		Theatre
		<input type="text" name="theatre" aria-label="Theatre" placeholder="Theatre" />
	</label>

	<br /><br /><br />

	<button type="submit">Submit</button>
</form>
