<script>
	import '../app.css';
	let { children } = $props();
	import SiteHeader from '$lib/ui/site-header.svelte';
	import SiteFooter from '$lib/ui/site-footer.svelte';
</script>

<SiteHeader />

{@render children()}

<SiteFooter />