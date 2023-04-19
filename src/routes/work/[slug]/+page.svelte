<script>
	import gsap from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import fadeGradient from '$lib/graphics/fade-gradient.png';
	import Footer from '$lib/components/Footer.svelte';
	import './project.css';

	export let data;

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.parallax-image', {
			yPercent: 55,
			ease: 'none',
			force3D: true,
			scrollTrigger: {
				trigger: '.parallax-wrapper',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				toggleActions: 'restart none none reverse'
			}
		});

		const galleryRows = document.getElementsByClassName('gallery-row');
		for (let gallery of galleryRows) {
			const aspectRatios = [];
			for (const child of gallery.children) {
				let height, width;
				if (child.tagName === 'IMG') {
					await child.decode();
					height = child.naturalHeight;
					width = child.naturalWidth;
				} else {
					[height, width] = child.className
						.split(' ')
						.filter((str) => str.includes('aspect-'))
						.sort()
						.map((str) => str.replace('aspect-w-', '').replace('aspect-h-', ''));
				}

				const index = Array.from(gallery.children).indexOf(child);
				// console.log(child.tagName + '-' + index, 'height, width:', height, width);

				if (!(width && height)) {
					throw new Error('aspect ratio of gallery image is undefined');
				}

				aspectRatios.push(width / height);
			}
			const smallestRatio = Math.min(...aspectRatios);
			gallery.style.gridTemplateColumns = aspectRatios
				.map((ratio) => ratio / smallestRatio)
				.map((ratio) => `${ratio}fr `)
				.join(' ');
		}
	});
</script>

<!-- <h1>{data.project?.title}</h1> -->

<div class="parallax-wrapper aspect-h-12 aspect-w-16 relative -z-10 lg:aspect-h-10">
	<div class="absolute top-0">
		<img src={data.headerImagePath} alt={`Header of the project "${data.title}"`} class=" parallax-image h-full w-full object-cover" />
		<div class="fade-gradient absolute bottom-0 h-1/5 w-full" />
	</div>
</div>
<div class="content-area xl:pt-18 min-h-screen w-full bg-backdrop pt-6 md:[&>*]:prose-lg 2xl:[&>*]:prose-xl md:pt-8 lg:pt-14 2xl:pt-32">
	{@html data.rawHtml}
</div>

<!-- <Footer /> -->

<style>
</style>
