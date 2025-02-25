<script>
	import '$lib/styles/app.css';
	let { children } = $props();
	import SiteHeader from '$lib/ui/site-header.svelte';
	import SiteFooter from '$lib/ui/site-footer.svelte';
	import Metadata from '$lib/metadata.svelte';
	import Analytics from '$lib/analytics.svelte';
</script>

<Metadata />

<Analytics />

<SiteHeader />

{@render children()}

<SiteFooter />