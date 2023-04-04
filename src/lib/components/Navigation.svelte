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
		class="group fixed left-6 top-4 z-50 flex items-center justify-start sm:left-9 sm:top-4 md:left-12 md:top-6 lg:left-16 lg:top-7 xl:left-20 xl:top-8"
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
		class="fixed z-40 h-0 w-screen overflow-hidden bg-neutral-900 text-5xl text-white transition-all duration-500 md:text-6xl lg:text-7xl"
		class:show={navOpen}
		class:h-screen-large={navOpen}
	>
		<div class="h-screen-large flex w-screen flex-col items-center justify-center">
			<a href="/#work" on:click={() => (navOpen = false)} class="menu-item relative my-2 px-4 py-2 lg:my-4">WORK</a>
			<a href="/about" on:click={() => (navOpen = false)} class="menu-item relative my-2 px-4 py-2 lg:my-4">ABOUT</a>
			<a href="/contact" on:click={() => (navOpen = false)} class="menu-item relative my-2 px-4 py-2 lg:my-4">CONTACT</a>
			<div class="mt-8 flex items-center justify-center">
				<a href="https://www.linkedin.com/in/jonas-wolter/" class="m-4">
					<img class="h-6 w-6 lg:h-8 lg:w-8" src={linkedinIcon} alt="LinkedIn" />
				</a>
				<a href="https://github.com/moonclimber1" class="m-4">
					<img class="h-6 w-6 lg:h-8 lg:w-8" src={githubIcon} alt="Github" />
				</a>
				<a href="https://vimeo.com/jonaswolter" class="m-4">
					<img class="h-6 w-6 lg:h-8 lg:w-8" src={vimeoIcon} alt="Vimeo" />
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

	.menu-item:hover:after {
		content: '';
		@apply absolute right-0 h-[0.12em] w-full bg-accent-400;
		top: 48%;
	}
</style>
