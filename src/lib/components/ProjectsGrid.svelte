<script>
	import exampleImage from '$lib/graphics/dream-of-me.jpg';
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { fade, fly } from 'svelte/transition';
	import { send, receive } from '$lib/modules/crossfade';
	import { goto } from '$app/navigation';

	export let projects;

	let transitionActive = false;
	let transitionProject;

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.card', {
			y: '-55vh',
			ease: 'power1.out',
			force3D: true,
			scrollTrigger: {
				trigger: '.projects',
				stagger: 0.5,
				// start: "top bottom", // the default values
				// end: "bottom top",
				scrub: true
			}
		});
	});

	function handleProjectClick(project) {
		transitionProject = project;
		transitionActive = true;

		projects = projects.filter((item) => item.url !== project.url);

		// TODO: Animate other projects
		// gsap.to('.card', {
		// 	yPercent: '50',
		// 	duration: 0.5
		// });
	}

	function gotoProject() {
		console.log('Transitioning to new route');
		goto(transitionProject?.url);
	}
</script>

<section class="projects content-area -mb-80 pt-[26vh]">
	<div id="work" />
	<div class="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-16">
		{#each projects as project, i (project.slug)}
			<a href={project.url} data-sveltekit-reload on:click|preventDefault={() => goto(project.url)} class=" card group relative mb-2 first:col-span-full">
				<article>
					<div class="aspect-h-10 aspect-w-16 overflow-hidden rounded-2xl sm:rounded-3xl">
						<img
							src={project.headerImagePath}
							alt={`Project "${project.title}", ${project.subtitle}`}
							class="object-cover transition-all duration-400 ease-out group-hover:scale-[1.04]"
						/>
					</div>
					<div
						class="absolute -bottom-4 right-0 flex flex-col items-end justify-end transition-all duration-400 ease-out group-hover:-translate-x-3 group-hover:-translate-y-7"
					>
						<h5
							class="translate-y-full rounded-full bg-black px-4 py-1 text-xs text-white opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm"
						>
							{project.subtitle}
						</h5>
						<h4 class=" z-10 rounded-full bg-white px-4 py-1 text-sm sm:text-base">{project.title}</h4>
					</div>
				</article>
			</a>
		{/each}
	</div>
</section>

<!-- {#if transitionActive}
	<div on:introend={gotoProject} in:receive|global={{ key: 'expand' }} class="aspect-w-16 aspect-h-10 fixed top-0 w-screen">
		<div class="absolute top-0">
			<img src={transitionProject.headerImagePath} alt="" class="h-full w-full object-cover" />
			<div class="fade-gradient absolute bottom-0  h-1/5 w-full" />
		</div>
	</div>
{/if} -->
