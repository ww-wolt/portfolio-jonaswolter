<script>
	export const prerender = true;

	const DEFAULT_TITLE = 'Jonas Wolter | Creative Coder, Interaction Designer, Media Artist';
	const DEFAULT_DESCRIPTION =
		"I'm a young designer and programmer who loves to critically explore technology and is passionate about creating interactive experiences that blend physical and digital worlds.";
	const DEFAULT_IMAGE_PATH = '/images/portrait-jonas-wolter.jpg';

	import '../app.css';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { initLenis } from '$lib/modules/LenisScroll.js';

	onMount(async () => {
		initLenis();
	});

	$: seo = $page.data?.seo;
	$: console.log('🚀 ~ $page:', $page);
</script>

<!-- Content -->
<div class="app">
	<div id="background-fill" class="h-screen-large fixed top-0 -z-50 w-screen bg-backdrop" />
	<Navigation />

	<main class=" w-full overflow-y-hidden font-general">
		<slot />
	</main>
</div>

<!-- SEO -->
<svelte:head>
	<!-- Robots -->
	<meta name="robots" content="index, follow, max-snippet: -1, max-image-preview:large, max-video-preview:-1" />

	<!-- Basic -->
	<title>{seo?.title || DEFAULT_TITLE}</title>
	<meta name="description" content={seo?.description || DEFAULT_DESCRIPTION} />
	{#if seo?.keywords}
		<meta name="keywords" content={seo?.keywords} />
	{/if}

	<!-- Open Graph -->
	<meta property="og:title" content={seo?.title || DEFAULT_TITLE} />
	<meta property="og:description" content={seo?.description || DEFAULT_DESCRIPTION} />
	<meta property="og:image" content={$page?.url.origin + (seo?.image || DEFAULT_IMAGE_PATH)} />
	<meta property="og:url" content={$page?.url.href} />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo?.title || DEFAULT_TITLE} />
	<meta name="twitter:description" content={seo?.description || DEFAULT_DESCRIPTION} />
	<meta name="twitter:image" content={$page?.url.origin + (seo?.image || DEFAULT_IMAGE_PATH)} />
</svelte:head>
