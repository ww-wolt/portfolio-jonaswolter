<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import LocomotiveScroll from 'locomotive-scroll';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let scrollContainer;

	// onMount(async () => {
	// 	const locoScroll = new LocomotiveScroll({
	// 		el: scrollContainer,
	// 		smooth: true,
	// 		smoothMobile: true,
	// 		mobile: {
	// 			smooth: true
	// 		},
	// 		smartphone: {
	// 			smooth: true
	// 		},
	// 		tablet: {
	// 			smooth: true
	// 		}
	// 	});

	// 	locoScroll.on('scroll', ScrollTrigger.update);

	// 	// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
	// 	ScrollTrigger.scrollerProxy('.has-scroll-smooth', {
	// 		scrollTop(value) {
	// 			return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
	// 		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
	// 		getBoundingClientRect() {
	// 			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
	// 		},
	// 		// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
	// 		pinType: document.querySelector('.has-scroll-smooth').style.transform ? 'transform' : 'fixed'
	// 	});
	// });
</script>

<div class="app">
	<!-- Header / Menu -->

	<main bind:this={scrollContainer} data-scroll-container id="scroll-container" class="absolute top-0 w-full scroll-smooth font-general">
		<slot />
	</main>
</div>
