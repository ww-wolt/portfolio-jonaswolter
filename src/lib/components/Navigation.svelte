<script>
	import menuIcon from '$lib/icons/menu.svg';
	import closeIcon from '$lib/icons/close.svg';

	import linkedinIcon from '$lib/icons/linkedin.svg';
	import githubIcon from '$lib/icons/github.svg';
	import vimeoIcon from '$lib/icons/vimeo.svg';
	import instagramIcon from '$lib/icons/instagram.svg';
	import { onMount } from 'svelte';

	let trigger;

	let navOpen = false;
	let triggerVisible;

	let removeMenuLabel = false;
	$: showMenuLabel = navOpen || triggerVisible;
	$: if (showMenuLabel) removeMenuLabel = false;
	// $: if (!showMenuLabel) {
	// 	setTimeout(() => {
	// 		removeMenuLabel = true;
	// 	}, 500);
	// }

	// let screenWidth;
	// $: mobile = screenWidth < 640;
	// $: console.log(mobile);

	onMount(async () => {
		const observer = new IntersectionObserver((entries) => {
			triggerVisible = entries[0].isIntersecting;
			// console.log('🚀 ~ red trigger:', triggerVisible);
		});
		observer.observe(trigger);

		// screenWidth = screen.width;
		// addEventListener('resize', (event) => {
		// 	screenWidth = screen.width;
		// });
	});
</script>

<nav class="">
	<button
		on:click={() => {
			navOpen = !navOpen;
		}}
		class="fixed left-6 top-6 z-50 flex -translate-x-3 -translate-y-3 items-center justify-start sm:left-9 sm:top-6 md:left-12 md:top-6 lg:left-16 lg:top-7 xl:left-20 xl:top-8"
	>
		<img class="box-content h-6 w-6 object-contain p-3 md:h-7 md:w-7 xl:h-8 xl:w-8" src={navOpen ? closeIcon : menuIcon} alt="" />
		<span
			class:text-white={navOpen}
			class:disable-menu-label={!showMenuLabel}
			class:hidden={removeMenuLabel}
			class=" translate-x-0 px-0 text-xl font-medium uppercase opacity-100 transition-all duration-500 ease-out max-md:hidden sm:px-2 md:text-2xl lg:px-4"
			>{navOpen ? 'Close' : 'Menu'}</span
		>
	</button>
	<div
		class="fixed z-40 h-0 w-screen overflow-hidden bg-dark-backdrop text-5xl text-white transition-all duration-700 md:text-6xl lg:text-7xl"
		class:show={navOpen}
		class:h-screen-large={navOpen}
	>
		<div class="h-screen-large flex w-screen flex-col items-center justify-center">
			<a href="/work" on:click={() => (navOpen = false)} class="menu-item relative my-2 px-4 py-2 md:my-3 lg:my-4">WORK</a>
			<a href="/about" on:click={() => (navOpen = false)} class="menu-item relative my-2 px-4 py-2 md:my-3 lg:my-4">ABOUT</a>
			<a href="/contact" on:click={() => (navOpen = false)} class="menu-item relative my-2 px-4 py-2 md:my-3 lg:my-4">CONTACT</a>
			<div class="mt-8 flex items-center justify-center">
				<a href="https://www.linkedin.com/in/jonas-wolter/" target="_blank" class="m-4">
					<img class="h-6 w-6 lg:h-8 lg:w-8" src={linkedinIcon} alt="LinkedIn" />
				</a>
				<a href="https://github.com/moonclimber1" target="_blank" class="m-4">
					<img class="h-6 w-6 lg:h-8 lg:w-8" src={githubIcon} alt="Github" />
				</a>
				<a href="https://vimeo.com/jonaswolter" target="_blank" class="m-4">
					<img class="h-6 w-6 lg:h-8 lg:w-8" src={vimeoIcon} alt="Vimeo" />
				</a>
				<a href="https://www.instagram.com/moonclimber_/" target="_blank" class="m-4">
					<img class="h-6 w-6 lg:h-8 lg:w-8" src={instagramIcon} alt="Instagram" />
				</a>
			</div>
		</div>
	</div>
</nav>
<div bind:this={trigger} class=" absolute top-[10vh] h-2 w-2 bg-red-600 opacity-0" />

<style>
	.show {
		@apply block;
	}

	.disable-menu-label {
		@apply -translate-x-5 opacity-0;
	}

	.show-menu-tag {
		@apply translate-x-0 opacity-100;
	}

	.menu-item:after {
		content: '';
		@apply absolute right-0 h-[0.12em] w-full origin-left scale-x-100 scale-y-0 bg-accent-400 opacity-0 transition-all duration-100;
		top: 48%;
	}

	.menu-item:hover:after {
		@apply scale-x-100 scale-y-100 opacity-100;
	}
</style>
