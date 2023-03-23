<script>
	export const prerender = true;

	import '../app.css';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';
	import Navigation from '../lib/components/Navigation.svelte';

	const enableLenis = true;

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);

		if (enableLenis) {
			const lenis = new Lenis({ lerp: 0.08 });

			gsap.ticker.add((time) => {
				lenis.raf(time * 1000);
			});

			lenis.on('scroll', ScrollTrigger.update);
		}
	});
</script>

<div class="app">
	<div id="background-fill" class="h-screen-large fixed top-0 -z-50 w-screen bg-backdrop " />
	<Navigation />

	<main class=" w-full  font-general">
		<slot />
	</main>
</div>
