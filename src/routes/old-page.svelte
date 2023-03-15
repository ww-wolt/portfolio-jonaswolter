<script>
	import LocomotiveScroll from 'locomotive-scroll';
	import { onMount } from 'svelte';

	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let scrollContainer;

	let animatedBox;

	let scrollDownSign;
	let thirdCard;

	onMount(async () => {
		const locoScroll = new LocomotiveScroll({
			el: scrollContainer,
			smooth: true,
			mobile: {
				smooth: true
			},
			smartphone: {
				smooth: true
			},
			tablet: {
				smooth: true
			}
		});

		locoScroll.on('scroll', ScrollTrigger.update);

		// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
		ScrollTrigger.scrollerProxy('.has-scroll-smooth', {
			scrollTop(value) {
				return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
			}, // we don't have to define a scrollLeft because we're only scrolling vertically.
			getBoundingClientRect() {
				return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
			},
			// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
			pinType: document.querySelector('.has-scroll-smooth').style.transform ? 'transform' : 'fixed'
		});

		gsap.from(animatedBox, {
			scrollTrigger: {
				trigger: animatedBox,
				start: 'top bottom',
				// markers: true,
				toggleActions: 'restart none none none'
			},
			// x: 300,
			scale: 0.8,
			duration: 1
		});

		gsap.to(scrollDownSign, {
			scrollTrigger: {
				trigger: thirdCard,
				start: 'top bottom',
				// markers: true,
				toggleActions: 'restart none none reverse'
			},
			y: 100,
			opacity: 0,
			duration: 0.8,
			ease: 'power1.inOut'
		});
	});
</script>

<div bind:this={scrollContainer} data-scroll-container id="scroll-container" class="bg-white">
	<!-- <div
		data-scroll
		data-scroll-sticky
		data-scroll-target="#scroll-container"
		class="absolute top-0 left-0 h-screen w-screen bg-[url('$lib/images/blurry-bg.png')] bg-cover"
		style="image-rendering: pixelated;"
	/> -->

	<div data-scroll data-scroll-speed="6" class="absolute  top-32 left-0 h-[700px] w-[700px] rounded-[50%] bg-black/80 " />
	<div data-scroll data-scroll-speed="3" class="absolute top-96 right-40 h-96 w-96 rounded-[50%] bg-black " />
	<div data-scroll data-scroll-speed="2" class="absolute top-[450px] left-96 h-[450px] w-[450px] rounded-[50%]  bg-white/40 " />
	<div data-scroll data-scroll-speed="6" class="absolute  top-[80vh]  left-[20vw] h-[700px] w-[700px] rounded-[50%] bg-black/50" />

	<div data-scroll data-scroll-sticky data-scroll-target="#scroll-container" class="absolute top-0 left-0 h-screen w-screen backdrop-blur-[150px]" />

	<div data-scroll data-scroll-speed="2" class="absolute top-96 left-60 h-96  w-96   rounded-[52px] bg-black opacity-60 mix-blend-overlay  shadow-xl" />
	<div data-scroll data-scroll-speed="-2" class="absolute  top-40 right-60   h-96 w-96 rounded-[52px] bg-black opacity-60 mix-blend-overlay shadow-xl" />
	<div data-scroll data-scroll-speed="6" bind:this={thirdCard} class="absolute top-[700px] left-[38vw]  h-96  w-96 rounded-[52px] bg-black  mix-blend-overlay shadow-xl" />

	<div
		data-scroll
		data-scroll-sticky
		data-scroll-target="#scroll-container"
		class="absolute top-0 left-0 h-screen w-screen bg-[url('$lib/images/noise.png')] bg-[length:500px] mix-blend-overlay"
		style="image-rendering: crisp-edges;"
	/>

	<div class="mx-auto max-w-4xl">
		<div data-scroll data-scroll-speed="1" class="-z-50 h-72" />
		<h2 data-scroll data-scroll-speed="1" data-scroll-delay="1" class="text-right text-4xl">Jonas Wolter</h2>
		<h1 data-scroll data-scroll-speed="2" class="py-0 pb-80 text-right text-8xl font-light leading-[1.15]">
			New Media <b class="font-medium">Artist</b><br />Interaction <b class="font-medium">Designer</b><br /><b class="font-medium">Programmer</b>
		</h1>
		<h2 class="mb-32 inline-block text-8xl font-bold"><LerpText scrollSpeed={4} text="My Work" /></h2>
		<div bind:this={animatedBox} class="mb-16 rounded-xl text-2xl">
			<h3 data-scroll data-scroll-speed="0.4" class=" pb-8 text-6xl font-medium">Don't answer be happy</h3>
			<p>
				The installation "Don't Answer Be Happy" creates an interactive experience in which everything revolves around the personal smartphone. Engrossed in a conversation between
				their own personal smartphone and the surrounding artificial intelligence, visitors are compelled to take a stand. Confrontations with the ambivalence of digital reality
				arise, and evasion is not possible. The experienced space reflects upon the digital colonization regarding people and regions of this world outside of global tech hotspots.
			</p>
		</div>

		<img data-scroll data-scroll-speed="1" src={dreamOfMeImage} alt="Project: Dream of me" class="relative right-36 my-40 h-96 rounded-2xl" />

		<div data-scroll data-scroll-speed="1" class="h-[90vh] rounded-xl bg-gray-50 p-8 text-xl shadow-xl">
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
			accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
			elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
			kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
			labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
			ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
			accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
			elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
		</div>
	</div>
</div>

<div bind:this={scrollDownSign} class="text-md fixed bottom-9 flex w-screen flex-col items-center justify-center text-center">
	<img src={arrowImage} alt="arrow" class="w-4 pb-1" />
	<span>Scroll down</span>
</div>

<style>
</style>
