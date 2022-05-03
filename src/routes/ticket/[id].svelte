<script>
	import { format } from 'date-fns';
	import { toDataURL } from 'qrcode';
	import { onMount } from 'svelte';

	/** @type {{email: string
id: string
movie_time: string
screen_name: string
seat_no: string
theatre: string}}*/
	export let data;

	/** @type {string}*/
	let qrcodeURL;

	onMount(async () => {
		const qr = await toDataURL(`${data.id}`);
		console.log(qr);
		qrcodeURL = qr;
	});
</script>

<div class="ticket">
	<div class="maingrid">
		<div class="title">
			<header>THE BATMAN 2022</header>
			<h1>BATMAN</h1>
		</div>

		<div class="qrcode">
			{#if qrcodeURL}
				<img src={qrcodeURL} alt="qrcode" />
			{/if}
		</div>

		<div class="date">
			<h2>{data.seat_no}</h2>
		</div>

		<div class="admission">
			<h2>{format(new Date(data.movie_time), 'MMM dd  h:mm aa')}</h2>
		</div>

		<div class="price">
			<h2>{data.theatre}</h2>
		</div>

		<div class="joke">
			<p>Enjoy your time with the movie</p>
		</div>
	</div>
</div>

<style lang="scss">
	* {
		color: var(--app-color-black);
	}

	* {
		font-family: sans-serif;
	}

	header,
	h1,
	h2 {
		text-transform: uppercase;
	}

	header {
		font-weight: 200;
		font-size: 11px;
		letter-spacing: 5px;
		color: #000;
		margin-top: 70px;
	}

	h1 {
		font-size: 38px;
		letter-spacing: 6px;
		// color: white;
		margin-top: -70px;
	}

	h2 {
		font-size: 16px;
	}

	p {
		font-weight: 200;
		font-size: 13px;
	}

	span {
		font-weight: normal;
	}

	.ticket {
		display: grid;
		align-items: center;
		justify-content: center;
		width: 300px;
		height: 700px;
		background-image: url('https://wallpapercave.com/wp/CSi3UVj.jpg');
		background-size: cover;
		background-repeat: no-repeat;
	}

	.maingrid {
		display: grid;
		width: 300px;
		height: 700px;
		text-align: center;
		grid-template: 15% 71% 7% 7% / 50% 50%;
	}

	.title {
		background-color: black;
	}

	.title,
	.qrcode,
	.admission,
	.date,
	.price {
		display: grid;
		align-items: center;
		justify-content: center;
		text-align: center;
		border: black solid 1px;
	}

	.qrcode,
	.price,
	.title {
		grid-column: 1/3;
	}

	.joke {
		display: none;
	}

	@media screen and (min-width: 500px) {
		header {
			font-size: 11px;
			color: black;
			margin-top: 0px;
		}

		h1 {
			font-size: 58px;
			margin-top: 30px;
			letter-spacing: 20px;
			color: black;
		}

		h2 {
			font-size: 20px;
		}

		.ticket {
			width: 100vw;
			height: 100vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.maingrid {
			width: 873px;
			height: 280px;
			grid-template: 60% 25% 15% / repeat(4, 1fr);
		}

		.maingrid > div {
			display: grid;
			align-items: center;
			justify-content: center;
			text-align: center;
			border: black solid 1px;
		}

		.title,
		.joke {
			grid-column: 1 / 4;
		}

		.title {
			padding: 30px;
			background-color: transparent;
		}

		.qrcode {
			grid-area: 1/4/4/5;
		}

		.price {
			grid-column: 3/4;
		}

		.joke {
			display: inline-block;
		}

		.qrcodepen {
			height: 150px;
			width: 150px;
		}
	}
</style>
