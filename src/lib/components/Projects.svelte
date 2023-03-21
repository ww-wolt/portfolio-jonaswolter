<script>
	import exampleImage from '$lib/images/dream-of-me.jpg';

	import { projects } from '$lib/modules/ProjectsProvider.js';
	$: console.log('🚀 ~ projects:', $projects);

	let sampleProjects = [
		{ title: "Don't Answer Be Happy", subtitle: 'Bachelor Project' },
		{ title: 'Dream of Me', subtitle: 'Audiovisual Performance' },
		{ title: "Don't Answer Be Happy", subtitle: 'Bachelor Project' }
	];
</script>

<section class="mx-auto mt-40 max-w-7xl  p-8">
	<!-- <h3 class="text-6xl">Work</h3> -->
	<div id="work" class="grid grid-cols-2 gap-8">
		{#each sampleProjects as project, i}
			<a href="/" class=" bg-green-300" class:col-span-full={i == 0}>
				<article>
					<img src={exampleImage} alt="Example" />
					<h4>{project.title}</h4>
					<h5>{project.subtitle}</h5>
				</article>
			</a>
		{/each}
	</div>
</section>
