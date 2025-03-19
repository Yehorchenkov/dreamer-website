<script>
    import { Button } from 'bits-ui';
    import { formatDate } from '$lib/utils';
    import ButtonLight from '$lib/ui/primitives/button-light.svelte';
    import ButtonRef from '$lib/ui/primitives/button-ref.svelte';
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import Icon from "@iconify/svelte";

    let { data } = $props();

    // Embla Carousel options
    let options = { align: "center", dragFree: true };

    let emblaApi;
    let prevButtonDisabled = $state();
    let nextButtonDisabled = $state();

    function scrollPrev() {
        if (emblaApi) {
            emblaApi.scrollPrev();
            updateButtonStates();
        }
    }

    function scrollNext() {
        if (emblaApi) {
            emblaApi.scrollNext();
            updateButtonStates();
        }
    }

    function onInit(event) {
        emblaApi = event.detail;
        if (emblaApi) {
            updateButtonStates();
        }
    }

    function updateButtonStates() {
        prevButtonDisabled = !emblaApi.canScrollPrev();
        nextButtonDisabled = !emblaApi.canScrollNext();
    }
</script>

<div class="embla container mx-auto p-4">
    <div class="embla__viewport overflow-hidden" use:emblaCarouselSvelte = {{ options }} onemblaInit="{ onInit }">
        <div class="embla__container flex backface-hidden -mx-2">
            {#each data.news as { title, date, slug, content }}
                <div class="embla__slide grow-0 shrink-0 min-w-0 basis-full md:basis-1/2 lg:basis-1/3 px-2">
                    <div class="h-full bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-primary">{title}</h2>
                        <div class="flex items-center mb-2 space-x-2">
                            <Icon icon="uil:calendar-alt" class="text-primary h-6 w-6" />
                            <p>{formatDate(date)}</p>
                        </div>
                        <p class="mb-2 text-justify">{@html content}</p>
                        <ButtonRef href="/{slug}" text="Read more" />
                    </div>
                </div>
            {/each}
            <!-- {#each news as { title, date, description, reference }}
                <div class="embla__slide grow-0 shrink-0 min-w-0 basis-full md:basis-1/2 lg:basis-1/3 px-2">
                    <div class="h-full bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
                        <div class="flex items-center mb-2 space-x-2">
                            <Icon icon="uil:calendar-alt" class="text-primary h-6 w-6" />
                            <p>{date}</p>
                        </div>
                        <p class="mb-2 text-justify">{description}</p>
                        <ButtonRef href={reference} text="Read more" />
                    </div>
                </div>
            {/each} -->
        </div>
    </div>
    <div class="flex justify-center md:justify-start mt-4 items-center">
        <Button.Root
            class="embla__prev px-2 py-2 bg-white text-blue-600 hover:text-blue-900 disabled:text-gray-600 disabled:cursor-not-allowed"
            onclick={scrollPrev}
            disabled={prevButtonDisabled}
        >
            <Icon icon="uil:arrow-circle-left" class="h-10 w-10" />
        </Button.Root>
        <Button.Root
            class="embla__next px-2 py-2 bg-white text-blue-600 hover:text-blue-900 disabled:text-gray-600 disabled:cursor-not-allowed"
            onclick={scrollNext}
            disabled={nextButtonDisabled}
        >
            <Icon icon="uil:arrow-circle-right" class="h-10 w-10" />
        </Button.Root>
        <ButtonLight class="ml-4" ref="/news" text="View all news" />

    </div>
</div>