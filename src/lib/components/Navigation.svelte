<script>
	let navOpen = false;
	$: console.log('🚀 ~ toggleNavigation ~ navOpen:', navOpen);
</script>

<nav class="">
	<button
		on:click={() => {
			navOpen = !navOpen;
		}}
		class="fixed top-6 left-6 z-50 h-12 w-12 bg-blue-500"
	/>
	<div class="fixed z-40 h-0 w-screen overflow-hidden bg-neutral-900 text-8xl text-white transition-all duration-500" class:show={navOpen}>
		<div class="h-screen-large flex w-screen flex-col items-center justify-center">
			<a href="/" on:click={() => (navOpen = false)} class="p-4 hover:line-through">WORK</a>
			<a href="/about" on:click={() => (navOpen = false)} class="p-4 hover:line-through">ABOUT</a>
			<a href="/contact" on:click={() => (navOpen = false)} class="p-4 hover:line-through">CONTACT</a>
		</div>
	</div>
</nav>

<style>
	.show {
		@apply block h-screen;
	}
</style>
