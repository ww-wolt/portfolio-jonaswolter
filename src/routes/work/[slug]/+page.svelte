<script>
	import gsap from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import fadeGradient from '$lib/graphics/fade-gradient.png';
	import './project.css';

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

<div class="parallax-wrapper aspect-h-10 aspect-w-16 relative -z-10">
	<div class="absolute top-0">
		<img src={data.headerImagePath} alt={`Header of the project "${data.title}"`} class=" parallax-image h-full w-full object-cover" />
		<div class="fade-gradient absolute bottom-0 h-1/5 w-full" />
	</div>
</div>
<div class="content-area xl:pt-18 min-h-screen w-full bg-backdrop pt-4 md:[&>*]:prose-lg 2xl:[&>*]:prose-xl md:pt-8 lg:pt-14 2xl:pt-24">
	{@html data.rawHtml}
</div>

<style>
</style>
