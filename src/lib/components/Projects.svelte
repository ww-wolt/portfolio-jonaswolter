<script>
	import exampleImage from '$lib/images/dream-of-me.jpg';
	import { onMount } from 'svelte';
	import { fetchProjects } from '$lib/modules/ProjectsProvider.js';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	export let projects;
	// $: console.log('🚀 ~ projects:', projects);

	let sampleProjects = [
		{ title: "Don't Answer Be Happy", subtitle: 'Bachelor Project' },
		{ title: 'Dream of Me', subtitle: 'Audiovisual Performance' },
		{ title: "Don't Answer Be Happy", subtitle: 'Bachelor Project' },
		{ title: 'Dream of Me', subtitle: 'Audiovisual Performance' },
		{ title: "Don't Answer Be Happy", subtitle: 'Bachelor Project' }
	];

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

		// gsap.to('.title', {
		// 	y: '50vh',
		// 	ease: 'none',
		// 	scrollTrigger: {
		// 		trigger: '.title',
		// 		scrub: true
		// 	}
		// });
	});
</script>

<section class="projects content-area pt-40">
	<!-- <h3 class="text-6xl">Work</h3> -->
	<div id="work" />
	<div class="grid gap-16 lg:grid-cols-2">
		{#each sampleProjects as project, i}
			<a href="/" class="card relative mb-2" class:col-span-full={i == 0}>
				<article>
					<div class="aspect-w-16 aspect-h-10">
						<img src={exampleImage} alt="Example" class=" rounded-3xl object-cover" />
					</div>
					<div>
						<h4 class=" absolute bottom-0  right-0 translate-y-1/2 rounded-full bg-white px-4 py-1 ">{project.title}</h4>
						<h5 class=" absolute bottom-5 right-0 rounded-full bg-black  px-4 py-1 text-sm text-white">{project.subtitle}</h5>
					</div>
				</article>
			</a>
		{/each}
	</div>
	<div class="mt-80 flex w-full justify-around">
		{#each projects as project}
			<a href={project.url} class=" bg-green-300">{project.title}</a>
		{/each}
	</div>
</section>
