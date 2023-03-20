<script>
	import linkedinIcon from '$lib/icons/linkedin.svg';
	import githubIcon from '$lib/icons/github.svg';
	import vimeoIcon from '$lib/icons/vimeo.svg';
	import instagramIcon from '$lib/icons/instagram.svg';

	let navOpen = false;
	$: console.log('🚀 ~ toggleNavigation ~ navOpen:', navOpen);
</script>

<nav class="">
	<button
		on:click={() => {
			navOpen = !navOpen;
		}}
		class="fixed top-6 left-6 z-50 h-12 w-12 bg-blue-500 sm:top-9 sm:left-9 md:top-12 md:left-12 lg:top-16 lg:left-16 "
	/>
	<div
		class="fixed z-40 h-0 w-screen overflow-hidden bg-neutral-900 text-7xl text-white transition-all duration-500"
		class:show={navOpen}
		class:h-screen-large={navOpen}
	>
		<div class="h-screen-large flex w-screen flex-col items-center justify-center">
			<a href="/" on:click={() => (navOpen = false)} class="my-4 rounded-[1000px] border-4 px-10 py-2  decoration-accent-400 hover:line-through">WORK</a>
			<a href="/about" on:click={() => (navOpen = false)} class="my-4 rounded-[1000px] border-4 px-10 py-2  decoration-accent-400 hover:line-through">ABOUT</a>
			<a href="/contact" on:click={() => (navOpen = false)} class=" my-4 rounded-[1000px] border-4 px-10 py-2  decoration-accent-400 hover:line-through"
				>CONTACT</a
			>
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
</style>
