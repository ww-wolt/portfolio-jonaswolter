<script>
	export const prerender = true;

	import '../app.css';
	import Navigation from '../lib/components/Navigation.svelte';
</script>

<div class="app">
	<Navigation />

	<main class="absolute top-0 w-full scroll-smooth font-general">
		<slot />
	</main>
</div>
