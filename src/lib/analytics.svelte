<script>
    import { browser } from '$app/environment'

    if (browser) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
            window.dataLayer.push(arguments);
        }
        window.gtag('js', new Date());

        window.gtag('config', 'G-JKB16WXYNH');
    }
</script>

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JKB16WXYNH"></script>
</svelte:head>