<script>
	import { page } from '$app/stores';
</script>

<div class="flex-col flex h-screen w-full items-center justify-center">
	<h1 class="text-4xl m-2">An error occured</h1>
	<h2 class="text-2xl m-2">{$page.status}: {$page.error.message}</h2>
</div>
