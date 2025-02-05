<script>
    import Map from "$lib/ui/main-page/map.svelte";
    import Hero from "$lib/ui/main-page/hero.svelte";
</script>

<div class="mt-4 md:mt-0">
    <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="mb-4 md:mb-0 flex-none text-primary font-semibold text-xl text-center md:text-left md:w-14 md:rotate-270 whitespace-nowrap">
            About the project
        </div>
        <div class="overflow-visible flex-auto">
            <Hero />
        </div>
    </div>
</div>

<div class="mt-4 md:mt-12">
    <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="mb-4 md:mb-0 flex-none text-primary font-semibold text-xl text-center md:text-left md:w-14 md:rotate-270 whitespace-nowrap">
            Key facts
        </div>
        <div class="overflow-visible flex-auto w-full">
            
        </div>
    </div>
</div>

<div class="mt-4 md:mt-12">
    <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="mb-4 md:mb-0 flex-none text-primary font-semibold text-xl text-center md:text-left md:w-14 md:rotate-270 whitespace-nowrap">
            Partners
        </div>
        <div class="overflow-visible flex-auto w-full">
            <Map />
        </div>
    </div>
</div>

