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

<section class="projects content-area pt-40">
	<div id="work" />
	<div class="grid gap-16 lg:grid-cols-2">
		{#each projects as project, i (project.slug)}
			<a
				out:send={{ key: 'expand' }}
				href={project.url}
				data-sveltekit-reload
				on:click|preventDefault={() => handleProjectClick(project)}
				class=" card group relative mb-2 first:col-span-full"
			>
				<article>
					<div class="aspect-w-16 aspect-h-10 overflow-hidden rounded-3xl">
						<img src={project.headerImagePath} alt="Project card" class="object-cover transition-all duration-400 ease-out  group-hover:scale-[1.04]" />
					</div>
					<div>
						<h4 class=" absolute bottom-0 right-0 translate-y-1/2 rounded-full bg-white px-4 py-1 ">{project.title}</h4>
						<h5 class=" absolute bottom-5 right-0 rounded-full bg-black  px-4 py-1 text-sm text-white">{project.subtitle}</h5>
					</div>
				</article>
			</a>
		{/each}
	</div>
</section>

<div class="mt-80 flex w-full justify-around">
	{#each projects as project}
		<a href="/" on:click|preventDefault={() => goto(project.url)} class=" bg-green-300">{project.title}</a>
	{/each}
</div>

<!-- {#if transitionActive}
	<div class="fixed top-0 h-screen w-screen">
		<div class="aspect-w-16 aspect-h-10 overflow-hidden">
			<img in:receive={{ key: 'expand' }} src={transitionProject.headerImagePath} alt="Project card" class="object-cover" />
		</div>
	</div>
{/if} -->

{#if transitionActive}
	<div on:introend={gotoProject} in:receive={{ key: 'expand' }} class="aspect-w-16 aspect-h-10 fixed top-0 w-screen">
		<div class="absolute top-0">
			<img src={transitionProject.headerImagePath} alt="" class="h-full w-full object-cover" />
			<div class="fade-gradient absolute bottom-0  h-1/5 w-full" />
		</div>
	</div>
{/if}
