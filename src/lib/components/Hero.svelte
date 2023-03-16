<section class=" h-screen-small relative flex  w-full  items-center justify-center p-6">
	<div class=" w-full text-right text-8xl font-medium ">
		<h2 class="mb-3 text-4xl font-normal">Jonas Wolter</h2>
		<!-- <h1 class="mb-3">New Media <u class="   underline  decoration-green-400 decoration-[12px]">Artist</u></h1>

		<h1 class="relative mb-3 inline">
			<span class=" after:absolute after:bottom-[-1%] after:right-0 after:-z-10 after:h-3 after:w-[99%] after:bg-cyan-300">Programmer</span>
		</h1> -->

		<div class="mb-[0.15em]">
			<h1 class="relative inline whitespace-nowrap">New Media <span class="artist">Artist</span></h1>
		</div>

		<div class="mb-[0.15em]">
			<h1 class="relative inline whitespace-nowrap">Interaction <span class="designer">Designer</span></h1>
		</div>

		<div class="mb-[0.15em]">
			<h1 class="relative inline whitespace-nowrap"><span class="programmer">Programmer</span></h1>
		</div>
	</div>
	<h1 class="absolute bottom-0">nonono</h1>
</section>

<style>
	.artist::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[33.3%] bg-blue-700;
	}

	.designer::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[43.3%] bg-blue-700;
	}

	.programmer::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[98.8%] bg-blue-700;
	}
</style>
