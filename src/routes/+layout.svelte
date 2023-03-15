<script>
	export const prerender = true;

	import '../app.css';
</script>

<div class="app">
	<!-- Header / Menu -->

	<main class="absolute top-0 w-full scroll-smooth font-general">
		<slot />
	</main>
</div>
