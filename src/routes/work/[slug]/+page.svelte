<script>
	export let data;
	console.log('🚀 ~ data:', data);
</script>

<!-- <h1>{data.project?.title}</h1> -->
<div class="prose">{@html data.project?.rawHtml}</div>

<style>
	:global(#abstract) {
		@apply text-2xl text-accent-500;
	}

	:global(#keywords > *) {
		@apply my-1 mr-1 inline-block rounded-full border border-cyan-500 px-4;
	}

	:global(#keywords) {
		@apply p-0;
	}
</style>
