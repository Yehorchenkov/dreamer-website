<script>
    import { formatDate } from '$lib/utils';
    import Icon from "@iconify/svelte";

    let { data } = $props();
</script>

<section class="max-w-screen-xl p-4 mx-auto justify-center mt-0 lg:mt-4">
    <div class="max-w-4xl mx-auto">
        <div class="text-primary text-3xl font-semibold text-left lg:text-center">
            {data.meta.title}
        </div>
        <div class="mt-4 flex items-center mb-6 space-x-2">
            <Icon icon="uil:calendar-alt" class="text-primary h-6 w-6" />
            <p>{formatDate(data.meta.date)}</p>
        </div>
        <div class="prose max-w-none text-justify">
            <data.content />
        </div>
    </div>
</section>