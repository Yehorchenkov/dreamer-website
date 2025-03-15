<script>
    import IconNav from "$lib/ui/header/icon-nav.svelte";
    import MainNav from "$lib/ui/header/main-nav.svelte";

    let { data } = $props();
</script>

<header class="shadow-lg bg-white text-white sticky z-30 top-0 items-center py-2 px-4">
    <section class="flex mx-auto justify-between items-center max-w-screen-xl">
        <IconNav />
        <MainNav data={data}/>
    </section>
</header>