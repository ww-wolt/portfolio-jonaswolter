<script>
	import Background from '$lib/components/Background.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// import portraitImage from '/images/portrait-jonas-wolter.jpg';
	// import pdf from '$lib/files/CV_Jonas_Wolter.pdf';
</script>

<Background />

<section class="content-area flex justify-center">
	<div class="mt-6 grid w-full grid-cols-1 gap-x-16 md:w-2/3 md:grid-cols-10">
		<h1 class="col-span-full mb-12 text-center text-4xl font-medium uppercase leading-[0.8em] md:text-6xl xl:mb-24">About</h1>
		<img class="mb-6 md:col-span-5" src="/images/portrait-jonas-wolter.jpg" alt="Portrait of Jonas Wolter" />
		<div class="flex flex-col justify-center md:col-span-5 md:col-start-6">
			<h2 class="mb-8 text-xl font-medium md:text-3xl">Jonas Wolter</h2>
			<p class="mb-6 text-base md:text-xl">
				I am a young designer and programmer who loves to critically explore technology and is passionate about creating interactive experiences that blend
				physical and digital worlds.
			</p>
			<a class="inline-link shy-link mb-4 text-base" href="/files/CV_Jonas_Wolter.pdf" target="_blank" rel="noreferrer">Download CV</a>
		</div>
	</div>
</section>
