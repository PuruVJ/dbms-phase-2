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

<h1>Ticket info</h1>

<h2>Movie time</h2>
<p>{format(new Date(data.movie_time), 'EEE MMM dd  h:mm aa')}</p>

<h2>Screen Name</h2>
<p>{data.screen_name}</p>

<h2>Seat no</h2>
<p>{data.seat_no}</p>

<h2>Theatre</h2>
<p>{data.theatre}</p>

{#if qrcodeURL}
	<img src={qrcodeURL} alt="qrcode" />
{/if}

<style lang="scss">
	* {
		color: var(--app-color-white);
	}
</style>
