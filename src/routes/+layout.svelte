<script>
	export const prerender = true;

	import '../app.css';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { initLenis } from '$lib/modules/LenisScroll.js';

	onMount(async () => {
		initLenis();
	});
</script>

<div class="app">
	<div id="background-fill" class="h-screen-large fixed top-0 -z-50 w-screen bg-backdrop" />
	<Navigation />

	<main class=" w-full overflow-y-hidden font-general">
		<slot />
	</main>
</div>
