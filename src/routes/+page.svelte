<script>
    import Map from "./main-page/map.svelte";
    import Hero from "./main-page/hero.svelte";
    import ProjectGoals from "./main-page/project-goals.svelte";

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
            content: null
        },
        {
            title: "News",
            content: null
        },
        {
            title: "Partners",
            content: Map
        }
    ];

</script>

<div class="max-w-screen-xl mx-auto">
    {#each sections as { title, content }}
        <div class="flex flex-col md:flex-row">
            <!-- Section Name (left on md, top on small screens) -->
            <div class="flex items-center justify-center p-4 md:p-0 md:w-14">
                <h1 class="text-xl text-primary font-semibold uppercase md:transform md:-rotate-90 whitespace-nowrap">
                    {title}
                </h1>
            </div>

            <!-- Section Content (right on md, bottom on small screens) -->
            <div class="flex flex-1 items-center justify-center bg-white p-4">
                <div>
                    {#if content}
                        <svelte:component this={content} />
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>