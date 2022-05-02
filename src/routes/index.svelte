<script>
	import 'normalize.css';
	import { page } from '$app/stores';
	import { enhance } from '$lib/form';
</script>

<svelte:head>
	<title>Book ticket</title>
</svelte:head>

<body>
	<nav class="navbar">
		<li class="logo">
			<img src="./assets/batman-logo.png" alt="" />
		</li>
		<li class="">Link1</li>
		<li>Link2</li>
		<li>Link3</li>
	</nav>

	<div class="content">
		<h2 class="header1">I AM</h2>
		<h1 class="header2">VENGEANCE</h1>
		<div class="btn--wrapper">
			<a href="#" class="btn btn-primary">Watch Trailer</a>
			<a href="#" class="btn btn-secondary">Book Ticket</a>
		</div>
		<p class="summary">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla rem aspernatur doloribus
			placeat porro incidunt voluptate mollitia eum officia odio soluta, error minus fugiat
			praesentium!
		</p>
	</div>

	<div class="page--trailer">
		<h1 class="trailer">TRAILER</h1>
		<div class="grid--wrapper-tr">
			<a href="#"
				><img src="./assets/thumb1.jpeg" class="thumb" alt="" />
				<p class="thumb-link">The Batman 2022 Trailer</p>
			</a>
			<a href="#"
				><img src="./assets/thumb2.jpeg" class="thumb" alt="" />
				<p class="thumb-link">The Batman 2022 Trailer</p>
			</a>
		</div>
	</div>

	<div class="tickets">
		<h1 class="trailer">TICKETS</h1>

		<form
			class="new"
			action="."
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
			<div class="btn--wrapper">
				<button type="submit" class="btn btn-secondary">SUBMIT</button>
				<button type="reset" class="btn btn-primary">RESET</button>
			</div>
		</form>
	</div>
</body>

<style>
	:root {
		font-size: 65%;
	}

	body {
		width: 100vw;
		box-sizing: border-box;
		overflow-x: hidden;

		/* background-image: './assets/pat.png';
		background-position: top right;
		background-size: cover;
		background-repeat: no-repeat; */
	}

	/* ######################################################################################## */
	/* ###########################           HOME PAGE         ################################ */
	/* ######################################################################################## */

	h2.header1,
	h1.header2 {
		font-family: 'Secular One', sans-serif;
	}

	div.content {
		color: #fff;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding-right: 10vw;
		padding-left: 10vw;
	}

	h2.header1 {
		padding: 0;
		margin: 0;
		padding: 30vh 0 5px 10px;
		font-size: 3rem;
	}

	h1.header2 {
		paddding: 0;
		padding-bottom: 60px;
		margin: 0;
		font-size: 6rem;
		font-style: italic;
	}

	nav.navbar {
		height: 80px;
		width: 100vw;
		padding: 0 30px;
		box-sizing: border-box;
		padding-top: 20px;
		/* background-color: #960000; */
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		color: #fff;
		background-color: #000;
		position: fixed;
		top: 0;
		left: 0;
		/* border-bottom: 2px solid rgba(255, 3, 3, 0.308); */
	}
	nav li {
		font-size: 1.4rem;
		font-weight: 600;
		text-transform: uppercase;
		list-style-type: none;
	}

	nav li.active {
		color: #cb0505;
		font-weight: 600;
	}

	nav img {
		align-self: center;
		/* transform: translateY(10px); */
		height: 100px;
		text-shadow: 2px 2px #000;
		margin-right: 40vw;
		filter: invert(1);
		/* background-color: #960000; */
	}

	div.btn--wrapper {
		padding-left: 15px;
	}

	a.btn {
		font-size: 1.6rem;
		padding: 5px 25px;
		text-decoration: none;
		text-transform: capitalize;
		font-weight: 700;
		color: #fff;
		border: 2px solid #fff;
		/* border-radius: 20px; */
		transform: scale(0.8);
		margin-right: 15px;
	}

	a.btn-primary {
		color: #000;
		background-color: #fff;
		border: 2px solid #fff;
		/* border-radius: 20px; */
	}

	p.summary {
		font-size: 1.6rem;
		line-height: 2.5rem;
		width: 45vw;
		padding-top: 10px;
		padding-left: 15px;
	}

	/* ######################################################################################## */
	/* ###########################          TRAILER PAGE       ################################ */
	/* ######################################################################################## */

	div.page--trailer {
		width: 100vw;
		box-sizing: border-box;
		padding-right: 10vw;
		padding-left: 10vw;
	}

	h1.trailer {
		color: #fff;
		font-weight: 800;
		font-size: 4.5rem;
		font-family: 'Secular One', sans-serif;
		width: fit-content;
	}

	div.grid--wrapper-tr {
		height: 70vh;
		width: 80vw;

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;

		justify-items: center;
		align-content: center;

		/* padding: 40px; */
	}

	a {
		text-decoration: none;
	}

	img.thumb {
		height: 280px;
		box-sizing: border-box;
		padding: 10px;
	}

	p.thumb-link {
		font-size: 1.8rem;
		color: #fff;
		text-decoration: underline;
		text-underline-offset: 4px;
		padding-left: 10px;
	}

	/* ######################################################################################## */
	/* ###########################          PAGE TICKETS       ################################ */
	/* ######################################################################################## */

	div.tickets {
		width: 100vw;
		box-sizing: border-box;
		padding-right: 10vw;
		padding-left: 10vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	form {
		width: 60vw;

		margin: 0 auto;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	input {
		width: 60vw;
		height: 20px;
		margin: 0;
		font-size: 1.5rem;
		font-weight: 600;
		padding: 7px 30px;
	}

	input:hover {
		cursor: pointer;
	}

	div.btn-wrapper {
		width: 100%;
	}

	button {
		font-size: 1.6rem;
		padding: 5px 25px;
		text-decoration: none;
		text-transform: capitalize;
		font-weight: 700;
		color: #fff;
		border: 2px solid #fff;
		/* border-radius: 20px; */
		transform: scale(0.8);
		margin-right: 15px;
	}

	button.btn-primary {
		color: #000;
		background-color: #fff;
		border: 2px solid #fff;
		/* border-radius: 20px; */
	}
</style>
