<script>
	import exampleImage from '$lib/images/dream-of-me.jpg';
	import { onMount } from 'svelte';
	import { fetchProjects } from '$lib/modules/ProjectsProvider.js';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	export let projects;

	// let transitionImagePath;

	onMount(async () => {
		gsap.to('.card', {
			y: '-500px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: '.projects',
				stagger: 0.5,
				// start: "top bottom", // the default values
				// end: "bottom top",
				scrub: true
			}
		});
	});
</script>

<section class="projects content-area pt-40">
	<!-- <h3 class="text-6xl">Work</h3> -->
	<div id="work" />
	<div class="grid gap-16 lg:grid-cols-2">
		{#each projects as project, i}
			<a href={project.url} class="card relative mb-2" class:col-span-full={i == 0}>
				<article>
					<div class="aspect-w-16 aspect-h-10 overflow-hidden rounded-3xl">
						<img src={project.headerImagePath} alt="Project card" class="  object-cover transition-all duration-400 hover:scale-[1.04]" />
					</div>
					<div>
						<h4 class=" absolute bottom-0  right-0 translate-y-1/2 rounded-full bg-white px-4 py-1 ">{project.title}</h4>
						<h5 class=" absolute bottom-5 right-0 rounded-full bg-black  px-4 py-1 text-sm text-white">{project.subtitle}</h5>
					</div>
				</article>
			</a>
		{/each}
	</div>
</section>

<!-- <div class="absolute">
	<div class="aspect-w-16 aspect-h-10 overflow-hidden rounded-3xl">
		<img src={project.headerImagePath} alt="Project card" class="  object-cover transition-all duration-400 hover:scale-[1.04]" />
	</div>
</div> -->
