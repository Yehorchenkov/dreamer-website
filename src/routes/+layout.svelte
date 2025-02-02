<script>
	import '../app.css';
	let { children } = $props();
	import SiteHeader from '$lib/ui/site-header.svelte';
</script>

<SiteHeader />

{@render children()}
