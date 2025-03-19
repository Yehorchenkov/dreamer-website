<script>
    let { data } = $props();
</script>

<div class="max-w-screen-xl mx-auto space-y-2 md:space-y-4">
    {#each data.modules as { title, slug }}
        <div class="w-full text-primary bg-white border border-gray-200 rounded-lg shadow-sm p-2">
            <a href={slug} class="mb-2 text-xl hover:underline">{ title }</a>
        </div>
    {/each}
</div>