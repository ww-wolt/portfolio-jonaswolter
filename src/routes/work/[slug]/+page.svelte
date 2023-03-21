<script>
	export let data;
</script>

<!-- <h1>{data.project?.title}</h1> -->
<div>{@html data.project?.rawHtml}</div>

<style>
	:global(#abstract) {
		@apply text-accent-500 text-4xl;
	}
</style>
