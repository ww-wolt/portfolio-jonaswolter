<script>
	import Background from '$lib/components/Background.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// import portraitImage from '/images/portrait.webp';
	// import pdf from '$lib/files/CV_Jonas_Wolter.pdf';

	const press = [
		{ outlet: 'Schaffhauser AZ', date: 'October 2026', href: '/files/AZ-Schaffhausen_2026-10-08.pdf' },
		{ outlet: 'Schaffhauser Nachrichten', date: 'July 2025', href: '/files/Schaffhauser-Nachrichten_2025-07-26.pdf' }
	];
</script>

<Background />

<section class="content-area flex justify-center">
	<div class="mt-6 grid w-full grid-cols-1 gap-x-12 lg:grid-cols-12 xl:w-5/6 xl:gap-x-16 2xl:w-3/4">
		<h1 class="col-span-full mb-16 text-center text-4xl font-medium uppercase leading-[0.8em] md:text-6xl xl:mb-24">About</h1>
		<img class="mb-6 w-full sm:mx-auto sm:w-2/3 lg:col-span-5 lg:mb-0 lg:aspect-[5/7] lg:w-full lg:self-start lg:object-cover" src="/images/portrait.webp" alt="Portrait of Jonas Wolter" />
		<div class="flex flex-col lg:col-span-7 lg:self-start">
			<h2 class="mb-8 text-xl font-medium md:text-3xl lg:-mt-1.5 lg:leading-none">Jonas Wolter</h2>
			<p class="mb-6 text-base md:text-xl">
				Jonas Wolter is a designer, media artist and creative coder based in Schaffhausen, Switzerland. His work explores the political dimensions of technological systems, ranging from interactive installations, immersive experiences and audiovisual performances to art projects in speculative design and low tech. He studied Computer Science & Interaction Design at Lucerne University of Applied Sciences and Arts (HSLU) and Media Design at the Haute École d'Art et de Design Genève (HEAD) and is co-founder of the art collective «kukuc».
			</p>
			<a class="inline-link shy-link mb-4 text-base" href="/files/CV_Jonas_Wolter.pdf" target="_blank" rel="noreferrer">Download CV</a>
			<h3 class="mb-2 mt-6 text-base font-medium uppercase">Press</h3>
			<ul class="flex flex-col gap-1 text-base">
				{#each press as article}
					<li>
						<a class="inline-link shy-link" href={article.href} target="_blank" rel="noreferrer">{article.outlet}</a>
						<span class="text-neutral-500">— {article.date}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
