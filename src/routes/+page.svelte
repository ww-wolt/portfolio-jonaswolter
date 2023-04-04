<script>
	import { onMount } from 'svelte';
	import Background from '$lib/components/Background.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';

	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';

	export let data;

	onMount(async () => {});
</script>

<Background />
<Hero />
<ProjectsGrid projects={data.projects} />
<Footer />
