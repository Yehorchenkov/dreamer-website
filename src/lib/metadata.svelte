<script>
    import { page } from "$app/stores";
    import { siteConfig } from "$lib/config/site";

    const title = $derived(
        $page.data.title ? `${$page.data.title} - ${siteConfig.name}` : siteConfig.name,
    );
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={siteConfig.description} />
	<meta name="keywords" content={siteConfig.keywords} />
	<meta name="author" content="Spectra Centre of Excellence EU" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteConfig.url + $page.url.pathname} />
	<!-- <meta property="og:image" content="https://dreamer.priestoroveplanovanie.sk/og.png" /> -->
	<!-- <meta property="og:image:alt" content={siteConfig.name} /> -->
	<!-- <meta property="og:image:width" content="1200" /> -->
	<!-- <meta property="og:image:height" content="630" /> -->
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:locale" content="EN_GB" />
</svelte:head>