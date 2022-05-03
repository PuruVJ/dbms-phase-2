<script>
	// import 'normalize.css';
	import { page } from '$app/stores';
	import { enhance } from '$lib/form';
</script>

<svelte:head>
	<title>Book ticket</title>
</svelte:head>

<body>
	<nav class="navbar">
		<li class="logo">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#"><img src="./assets/image.svg" alt="" /></a>
		</li>
		<li class=""><a href="#trailers">Trailers</a></li>
		<li><a href="#tickets">Tickets</a></li>
		<li><a href="#contact">Contact</a></li>
	</nav>

	<div class="home">
		<div class="content">
			<h2 class="header1">I AM</h2>
			<h1 class="header2">VENGEANCE</h1>
			<div class="btn--wrapper">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#trailers" class="btn btn-primary">Watch Trailer</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#tickets" class="btn btn-secondary">Book Tickets</a>
			</div>
			<h1 class="movie_title">THE BATMAN (2022)</h1>

			<p class="summary">
				When the Riddler, a sadistic serial killer, begins murdering key political figures in
				Gotham, Batman is forced to investigate the city's hidden corruption and question his
				family's involvement.
			</p>
		</div>

		<div class="image_poster">
			<img src="./assets/POSTER.svg" alt="batman" />
		</div>
	</div>

	<div class="page--trailer" id="trailers">
		<h1 class="trailer">TRAILERS & CLIPS</h1>
		<div class="grid--wrapper-tr">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe width="420" height="315" src="https://www.youtube.com/embed/mqqft2x_Aa4" />
			<!-- svelte-ignore a11y-invalid-attribute -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe width="420" height="315" src="https://www.youtube.com/embed/u34gHaRiBIU" />
		</div>
	</div>

	<div class="tickets" id="tickets">
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
				<input
					type="text"
					name="screen_number"
					aria-label="Screen number"
					placeholder="Screen number"
				/>
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
				<button type="submit" class="btn btn-secondary">Submit</button>
				<button type="reset" class="btn btn-primary">Reset</button>
			</div>
		</form>
	</div>

	<div class="footer" id="contact">
		<h1 class="trailer">CONTACT</h1>

		<div class="contact-links">
			<a href="mailto:batman2022@gmail.com" target="_blank" class="link">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="./assets/mail.svg" width="64" height="64" />
			</a>

			<a href="tel:9848012346" target="_blank" class="link">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="./assets/call.png" width="64" height="64" />
			</a>
		</div>

		<div class="cr">
			<p>© All copyrights are reserved</p>
		</div>
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

		background: radial-gradient(
			50% 50% at 50% 50%,
			rgba(150, 0, 0, 0.5) 0%,
			rgba(150, 0, 0, 0) 100%
		);
	}

	.home {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.image_poster img {
		width: 400px;
		height: 400px;
		padding-right: 30px;
	}

	h2.header1 {
		padding: 0;
		margin: 0;
		padding: 30vh 0 5px 10px;
		font-size: 3rem;
	}

	h1.header2 {
		padding: 0;
		padding-bottom: 30px;
		margin: 0;
		font-size: 6rem;
		font-style: italic;
		color: #fff;
	}

	h1.header2:hover {
		color: #ff0506;
	}

	nav.navbar {
		height: 64px;
		width: 100vw;
		padding: 0 30px;
		box-sizing: border-box;
		padding-top: 0px;
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

	nav a {
		color: #fff;
	}

	nav li {
		font-size: 1.4rem;
		font-weight: 600;
		text-transform: uppercase;
		list-style-type: none;
	}

	nav li a:hover {
		color: #ff0506;
	}

	nav img {
		align-self: center;
		/* transform: translateY(10px); */
		height: 80px;
		text-shadow: 2px 2px #000;
		margin-right: 40vw;
		padding-top: 15px;
		/* filter: invert(1); */
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

	h1.movie_title {
		font-size: 3rem;
		padding-top: 30px;
		padding-left: 15px;
		font-weight: 700;
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
		padding-top: 100px;
		background: radial-gradient(
			50% 50% at 50% 50%,
			rgba(150, 0, 0, 0.5) 0%,
			rgba(150, 0, 0, 0) 100%
		);
	}

	h1.trailer {
		color: #fff;
		padding-bottom: 20px;
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

	/* ######################################################################################## */
	/* ###########################          PAGE TICKETS       ################################ */
	/* ######################################################################################## */

	div.tickets {
		width: 100vw;
		box-sizing: border-box;
		padding-right: 10vw;
		padding-left: 10vw;
		padding-top: 100px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		background: radial-gradient(
			50% 50% at 50% 50%,
			rgba(150, 0, 0, 0.5) 0%,
			rgba(150, 0, 0, 0) 100%
		);
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

	/* div.btn-wrapper {
		width: 100%;
	} */

	button {
		font-size: 1.6rem;
		padding: 5px 25px;
		text-decoration: none;
		text-transform: capitalize;
		font-weight: 700;
		color: #fff;
		border: 2px solid #fff;
		/* border-radius: 20px; */
		transform: scale(0.9);
		margin-right: 15px;
	}

	button.btn-primary {
		color: #fff;
		border: 2px solid #fff;
		background-color: #000;
		/* border-radius: 20px; */
	}

	button.btn-secondary {
		color: #fff;
		border: 2px solid #fff;
		background-color: #000;
	}

	/* ######################################################################################## */
	/* ###########################          CONTACT US         ################################ */
	/* ######################################################################################## */

	.footer {
		width: 100vw;
		box-sizing: border-box;
		padding-right: 10vw;
		padding-left: 10vw;
		padding-top: 100px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		background: radial-gradient(
			50% 50% at 50% 50%,
			rgba(150, 0, 0, 0.3) 0%,
			rgba(150, 0, 0, 0) 100%
		);
	}

	.contact-links {
		margin: 0 auto;
		align-items: center;
		filter: invert(1);
	}

	.contact-links img {
		padding: 20px;
		padding-bottom: 60px;
	}

	.cr {
		color: #fff;
		margin: auto;
	}
</style>
