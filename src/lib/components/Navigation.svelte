<script>
	import menuIcon from '$lib/icons/menu.svg';
	import closeIcon from '$lib/icons/close.svg';

	import linkedinIcon from '$lib/icons/linkedin.svg';
	import githubIcon from '$lib/icons/github.svg';
	import vimeoIcon from '$lib/icons/vimeo.svg';
	import instagramIcon from '$lib/icons/instagram.svg';

	let navOpen = false;
</script>

<nav class="">
	<button
		on:click={() => {
			navOpen = !navOpen;
		}}
		class="group fixed top-4 left-6 z-50 flex items-center justify-start sm:top-4 sm:left-9 md:top-6 md:left-12 lg:top-7 lg:left-16 xl:top-8 xl:left-20"
	>
		<img class="w-6 md:w-7 xl:w-8" src={navOpen ? closeIcon : menuIcon} alt="" />
		<span
			class:text-white={navOpen}
			class:show-menu-tag={false}
			class=" -translate-x-4 px-4 text-2xl font-medium uppercase opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
			>{navOpen ? 'Close' : 'Menu'}</span
		>
	</button>
	<div
		class="fixed z-40 h-0 w-screen overflow-hidden bg-neutral-900 text-7xl text-white transition-all duration-500"
		class:show={navOpen}
		class:h-screen-large={navOpen}
	>
		<div class="h-screen-large flex w-screen flex-col items-center justify-center">
			<a href="/#work" on:click={() => (navOpen = false)} class="my-4 rounded-[1000px] px-10 py-2  decoration-accent-400 hover:line-through">WORK</a>
			<a href="/about" on:click={() => (navOpen = false)} class="my-4 rounded-[1000px] px-10 py-2  decoration-accent-400 hover:line-through">ABOUT</a>
			<a href="/contact" on:click={() => (navOpen = false)} class=" my-4 rounded-[1000px] px-10 py-2  decoration-accent-400 hover:line-through">CONTACT</a>
			<div class="mt-8 flex items-center justify-center">
				<a href="https://www.linkedin.com/in/jonas-wolter/" class="p-3">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
				<a href="https://github.com/moonclimber1" class="p-3">
					<img src={githubIcon} alt="Github" />
				</a>
				<a href="https://vimeo.com/jonaswolter" class="p-3">
					<img src={vimeoIcon} alt="Vimeo" />
				</a>
				<!-- <a href="https://www.instagram.com/moonclimber_/" class="p-3">
					<img src={instagramIcon} alt="Instagram" />
				</a> -->
			</div>
		</div>
	</div>
</nav>

<style>
	.show {
		@apply block;
	}

	.show-menu-tag {
		@apply translate-x-0 opacity-100;
	}
</style>
