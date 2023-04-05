<script>
	import { onMount } from 'svelte';
	import Background from '$lib/components/Background.svelte';

	let mail = '';

	onMount(async () => {
		let str = 'hc.retlowsanoj';
		mail = 'hello' + '@' + str.split('').reverse().join('');
	});
</script>

<Background />
<div class="flex h-screen w-full flex-col items-center justify-center">
	<h1 class="mb-6 text-2xl font-medium uppercase">Get in touch</h1>
	<h2 class="w-3/4 text-center text-2xl leading-tight sm:w-1/2 md:text-3xl lg:text-5xl">
		Just send me an email at <a class="underline decoration-accent-400" href="mailto:{mail}">{mail}</a>
	</h2>
</div>
