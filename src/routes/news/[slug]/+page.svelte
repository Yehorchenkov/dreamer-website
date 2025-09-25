<script>
	import PageTemplate from "$lib/page-template.svelte";
	import Gallery from '$lib/gallery.svelte';

	let { data } = $props();

</script>

<PageTemplate {data}>
	<!-- <data.content /> -->

	{#if data.meta.gallery}
		<Gallery directory={ data.meta.gallery } />
	{/if}
</PageTemplate>