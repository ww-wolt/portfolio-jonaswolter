<script>
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);
	});
</script>

<div class="flex h-[100vh] w-full flex-col items-center justify-center bg-gray-100">
	<h1 class=" title m-6 text-center text-4xl">This site is currently under construction.</h1>
	<h2 class=" text-center text-2xl">Please check again after 3 april.</h2>
	<div class="absolute bottom-6 text-center">
		<p class="text-sm">Portfolio</p>
		<p class="text-sm">Jonas Wolter</p>
	</div>
</div>
