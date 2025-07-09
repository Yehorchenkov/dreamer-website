<script>
	import PageTemplate from "$lib/page-template.svelte";
	import Gallery from '$lib/Gallery.svelte';

	let { data } = $props();

	// console.log("news meta data: ", data.meta.gallery);
</script>

<PageTemplate {data}>
	<data.content />

	<!-- {#if data.meta.gallery}
		<Gallery directory={ data.meta.gallery } />
	{/if} -->
</PageTemplate>