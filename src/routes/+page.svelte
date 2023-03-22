<script>
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	import { onMount } from 'svelte';
	import Background from '../lib/components/Background.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Hero from '../lib/components/Hero.svelte';

	import Projects from '../lib/components/Projects.svelte';

	export let data;

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);
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

<Background />
<Hero />
<Projects projects={data.projects} />
<Footer />
