<script>
	import gsap from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import fadeGradient from '$lib/images/fade-gradient.png';

	export let data;

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.parallax-image', {
			yPercent: 55,
			ease: 'none',
			scrollTrigger: {
				trigger: '.parallax-wrapper',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				toggleActions: 'restart none none reverse'
			}
		});
	});
</script>

<!-- <h1>{data.project?.title}</h1> -->

<div class="parallax-wrapper aspect-w-16 aspect-h-10 relative -z-10">
	<div class="absolute top-0">
		<img src={data.headerImagePath} alt={`Header of the project "${data.title}"`} class=" parallax-image h-full w-full object-cover" />
		<div class="fade-gradient absolute bottom-0  h-1/5 w-full" />
	</div>
</div>
<div class="content-area grid min-h-screen w-full grid-cols-1 items-start bg-backdrop pt-6">
	<!-- <p>{@html data.abstract}</p> -->
	{@html data.rawHtml}
</div>

<style>
	:global(#content > h1) {
		@apply text-5xl uppercase;
	}

	:global(#content > *) {
		/* height: auto; */
	}
	:global(#header-image) {
		@apply hidden;
	}
	:global(#content) {
		@apply grid grid-cols-1;
	}
	:global(#abstract) {
		@apply text-black;
	}

	:global(#keywords > *) {
		@apply my-1 mr-1 inline-block rounded-full border border-neutral-400 px-4 text-neutral-400;
	}

	:global(#keywords) {
		@apply p-0;
	}

	.fade-gradient {
		background-image: url('$lib/images/fade-gradient.png');
		background-repeat: repeat-x;
		background-repeat: round;
	}

	.fade-out-image {
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, transparent 100%);
	}
</style>
