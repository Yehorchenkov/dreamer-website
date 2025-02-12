<script>
    import Icon from "@iconify/svelte";

    const facts = [
        {
            icon: "uil:clock-two",
            description: "Duration: 01.10.24 - 30.09.27",
        },
        {
            icon: "uil:money-stack",
            description: "Budget: 400k EUR",
        },
        {
            icon: "uil:users-alt",
            description: "Partners: 7",
        },
        {
            icon: "uil:books",
            description: "Modules for development: 9",
        },
    ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-4 mt-0 mb-0 md:mt-12 md:mb-12">
    {#each facts as { icon, description }}
        <div class="flex flex-col items-center justify-center text-center">
            <Icon icon={icon} class="text-primary h-24 w-24" />
            <p class="text-xl">{description}</p>
        </div>
    {/each}
</div>