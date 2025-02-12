<script>
    import Map from "./main-page/map.svelte";
    import Hero from "./main-page/hero.svelte";
    import ProjectGoals from "./main-page/project-goals.svelte";
    import KeyFacts from "./main-page/key-facts.svelte";
    import News from "./main-page/news.svelte";

    const sections = [
        {
            title: "About the project",
            content: Hero
        },
        {
            title: "Project goals",
            content: ProjectGoals
        },
        {
            title: "Key facts",
            content: KeyFacts
        },
        {
            title: "News",
            content: News
        },
        {
            title: "Partners",
            content: Map
        }
    ];

</script>

<div class="max-w-screen mx-auto">
    {#each sections as { title, content }}
        <div class="flex flex-col lg:flex-row">
            <!-- Section Name (left on md, top on small screens) -->
            <div class="flex items-center justify-center p-4 lg:p-0 lg:w-14">
                <h1 class="text-xl text-primary font-semibold uppercase md:transform lg:-rotate-90 whitespace-nowrap">
                    {title}
                </h1>
            </div>

            <!-- Section Content (right on md, bottom on small screens) -->
            <div class="flex w-full items-center p-4">
                    {#if content}
                        <svelte:component this={content} />
                    {/if}
            </div>
        </div>
    {/each}
</div>
