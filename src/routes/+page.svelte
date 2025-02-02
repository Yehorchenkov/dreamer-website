<script>
    import Map from "./main-page/map.svelte";
    import Hero from "./main-page/hero.svelte";

    import { Popover, Button } from "bits-ui";
    let customAnchor = $state(null);
    let isOpen = $state(false);

    function togglePopover() {
        isOpen = !isOpen;
    }
</script>

<Popover.Root>
	<Popover.Trigger class="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Popover
    </Popover.Trigger>
	<Popover.Content class="z-10 bg-white p-2 rounded-lg shadow-lg">
		<p>Some boring text</p>
	</Popover.Content>
</Popover.Root>

<Popover.Root bind:open={isOpen}>
	<Popover.Trigger />
	<Popover.Content {customAnchor} class="z-10 bg-white p-2 rounded-lg shadow-lg">
		<p>Some boring text 2 about {customAnchor.id}</p>
	</Popover.Content>
</Popover.Root>

<button
    id="trigger1"
    type="popover-trigger"
    bind:this={customAnchor}
    class="bg-blue-500 text-white px-4 py-2 rounded-lg"
    onclick="{togglePopover}"

>
    Popover2
</button>

<div class="mt-12">
    <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="mb-4 md:mb-0 flex-none text-center md:text-left md:w-14 md:rotate-270">
            About the project
        </div>
        <div class="overflow-visible flex-auto">
            <!-- <Hero /> -->
        </div>
    </div>
</div>

<div class="mt-12">
    <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="mb-4 md:mb-0 flex-none text-center md:text-left md:w-14 md:rotate-270">
            Partners
        </div>
        <div class="overflow-visible flex-auto">
            <Map />
        </div>
    </div>
</div>

