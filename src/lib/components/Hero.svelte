<script>
	import { fade, fly } from 'svelte/transition';
</script>

<section class=" h-screen-small relative flex  w-full  items-center justify-center p-6 sm:p-9 md:p-12 lg:p-16 xl:p-20 xl:landscape:items-end">
	<div class=" fluid-font-title w-full text-right font-medium ">
		<h2 class=" fluid-font-subtitle font-normal leading-[1.4em]">Jonas Wolter</h2>
		<!-- <h1 class="mb-3">New Media <u class="   underline  decoration-green-400 decoration-[12px]">Artist</u></h1>

		<h1 class="relative mb-3 inline">
			<span class=" after:absolute after:bottom-[-1%] after:right-0 after:-z-10 after:h-3 after:w-[99%] after:bg-cyan-300">Programmer</span>
		</h1> -->

		<div class="">
			<h1 class="relative inline whitespace-nowrap">New Media <span class="artist">Artist</span></h1>
		</div>

		<div class="">
			<h1 class="relative mb-4 inline whitespace-nowrap">Interaction <span class="designer">Designer</span></h1>
		</div>

		<div class="">
			<h1 class="relative inline whitespace-nowrap"><span class="programmer">Programmer</span></h1>
		</div>
	</div>
</section>

<style>
	.artist::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[33.3%] bg-accent-400;
	}

	.designer::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[43.3%] bg-accent-400;
	}

	.programmer::after {
		content: '';
		@apply absolute bottom-[-0.5%] right-0 -z-10 h-[0.12em] w-[98.8%] bg-accent-400;
	}

	.fluid-font-title {
		font-size: clamp(27px, calc(1.6875rem + ((1vw - 3px) * 9.3902)), 104px);
		min-height: 0vw;
		line-height: 1.2em;
	}

	.fluid-font-subtitle {
		font-size: clamp(18px, calc(1.125rem + ((1vw - 3px) * 2.439)), 38px);
		min-height: 0vw;
		/* text-[0.36em] */
	}
</style>
