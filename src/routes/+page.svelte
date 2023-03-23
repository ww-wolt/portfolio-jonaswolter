<script>
	import { onMount } from 'svelte';
	import Background from '../lib/components/Background.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Hero from '../lib/components/Hero.svelte';

	import Projects from '../lib/components/Projects.svelte';

	export let data;

	onMount(async () => {});
</script>

<Background />
<Hero />
<Projects projects={data.projects} />
<Footer />
