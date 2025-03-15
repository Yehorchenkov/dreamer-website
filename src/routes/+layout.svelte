<script>
	import '$lib/styles/app.css';
	let { data, children } = $props();
	import SiteHeader from '$lib/ui/site-header.svelte';
	import SiteFooter from '$lib/ui/site-footer.svelte';
	import Metadata from '$lib/metadata.svelte';
	import Analytics from '$lib/analytics.svelte';
</script>

<Metadata />

<Analytics />

<SiteHeader data={data.modules}/>

{@render children()}

<SiteFooter />