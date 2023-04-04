<script>
	import Background from '$lib/components/Background.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// import portraitImage from '/images/portrait-jonas-wolter.jpg';
</script>

<Background />

<section class="content-area flex justify-center">
	<div class="mt-6 grid w-full grid-cols-1 gap-x-16 md:w-2/3 md:grid-cols-10">
		<h1 class="col-span-full mb-24 text-center text-4xl font-medium uppercase md:text-6xl">About</h1>
		<img class="md:col-span-5" src="/images/portrait-jonas-wolter.jpg" alt="" />
		<div class="flex flex-col justify-center md:col-span-5 md:col-start-6">
			<h2 class="my-8 text-xl font-medium md:text-3xl">Jonas Wolter</h2>
			<p class=" text-base md:text-xl">
				I am a young designer and programmer who loves to critically explore technology and is passionate about creating interactive experiences that blend
				physical and digital worlds.
			</p>
		</div>
	</div>
</section>
