<script>
	import { fade, fly } from 'svelte/transition';
	import heroArrowIcon from '$lib/icons/hero-arrow.png';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { getLenis } from '$lib/modules/LenisScroll.js';

	let arrow, arrowTrigger;

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(arrow, {
			scrollTrigger: {
				trigger: arrowTrigger,
				start: 'top top',
				toggleActions: 'restart none none reverse'
			},
			y: 150,
			opacity: 0,
			duration: 0.8,
			ease: 'power1.inOut'
		});

		const observer = new IntersectionObserver((entries) => {
			const visible = entries[0].isIntersecting;
			if (!visible) {
				// gsap.set(arrow, { opacity: 0 });
			}
		});

		observer.observe(arrowTrigger);
	});

	function handleArrowClick() {
		getLenis().scrollTo(window.innerHeight * 0.75, { duration: 3 }); // Alternative: lerp: 0.025
	}
</script>

<section class=" h-screen-small relative flex w-full items-center justify-center p-6 sm:p-9 md:p-12 lg:p-16 xl:p-20 xl:landscape:items-end">
	<div class=" fluid-font-title w-full text-right font-medium">
		<h2 class=" fluid-font-subtitle font-normal leading-[1.4em]">Jonas Wolter</h2>

		<div class="">
			<h1 class="relative mb-4 inline whitespace-nowrap">Creative <span class="coder">Coder</span></h1>
		</div>
		<div class="">
			<h1 class="relative mb-4 inline whitespace-nowrap">Interaction <span class="designer">Designer</span></h1>
		</div>
		<div class="">
			<h1 class="relative inline whitespace-nowrap">Media <span class="artist">Artist</span></h1>
		</div>
		<!-- <div class="">
			<h1 class="relative inline whitespace-nowrap"><span class="programmer">Programmer</span></h1>
		</div> -->
	</div>
	<div bind:this={arrowTrigger} class=" absolute top-[10vh] h-[30vh] w-2 opacity-0" />
	<div class="fixed bottom-0 flex w-full items-end justify-center p-6 sm:p-9 md:p-12 lg:p-16 xl:p-20 xl:landscape:justify-start">
		<button on:click={() => handleArrowClick()}>
			<img bind:this={arrow} src={heroArrowIcon} class="w-8 sm:w-10 md:w-11 lg:w-12 xl:w-14" alt="Down Arrow" />
		</button>
	</div>
</section>

<style>
	.artist::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[46.7%] bg-accent-400;
	}

	.designer::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[43.3%] bg-accent-400;
	}

	.coder::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[40.8%] bg-accent-400;
	}

	/* .programmer::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[98.8%] bg-accent-400;
	} */

	.fluid-font-title {
		font-size: clamp(27px, calc(1.6875rem + ((1vw - 3px) * 9.3902)), 104px);
		min-height: 0vw;
		line-height: 1.2em;
	}

	.fluid-font-subtitle {
		font-size: clamp(18px, calc(1.125rem + ((1vw - 3px) * 2.439)), 38px);
		min-height: 0vw;
		/* text-[0.36em] */
	}
</style>
