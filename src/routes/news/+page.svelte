<script>
    import { formatDate } from "$lib/utils";
    import ButtonRef from "$lib/ui/primitives/button-ref.svelte";
    import Icon from "@iconify/svelte";

    let { data } = $props();
</script>

<section class="max-w-screen-xl p-4 mx-auto justify-center">
    <div class="max-w-4xl mx-auto">
        {#each data.news as { title, date, slug, content }}
            <div class="text-primary text-3xl font-semibold text-left mt-8">
                {title}
            </div>
            <div class="mt-4 flex items-center mb-6 space-x-2">
                <Icon icon="uil:calendar-alt" class="text-primary h-6 w-6" />
                <p>{formatDate(date)}</p>
            </div>
            <p class="mb-2 text-justify">{content}</p>
            <ButtonRef href="/{slug}" text="Read more" />
        {/each}
    </div>
</section>