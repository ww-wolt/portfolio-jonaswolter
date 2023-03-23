<script>
	import gsap from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	export let data;

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.parallax-image', {
			yPercent: 50,
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

<div class="fade-out-image parallax-wrapper aspect-w-16 aspect-h-10">
	<img src={data.headerImagePath} alt="Project cover" class=" parallax-image object-cover" />
</div>
<div class="content-area w-full pt-20">{@html data.rawHtml}</div>

<style>
	:global(#header-image) {
		@apply hidden;
	}
	:global(#content) {
		@apply grid grid-cols-1;
	}
	:global(#abstract) {
		@apply text-2xl text-accent-500;
	}

	:global(#keywords > *) {
		@apply my-1 mr-1 inline-block rounded-full border border-cyan-500 px-4;
	}

	:global(#keywords) {
		@apply p-0;
	}

	.fade-out-image {
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, transparent 100%);
	}
</style>
