<script>
    import { partnersData } from "$lib/partnersData.js";
    let { data } = $props();

    let partner = partnersData.find((partner) => partner.shortName === data.meta.lead);
</script>

<section class="max-w-screen-xl p-4 mx-auto justify-center mt-0 lg:mt-4">
    <div class="max-w-4xl mx-auto">
        <div class="text-primary text-3xl font-semibold text-left lg:text-center">
            {data.meta.title}
        </div>
        {#if partner}
            <p class="text-primary text-lg font-semibold justify-left mt-4">
                Lead Partner:
            </p>
            <div class="flex flex-col sm:flex-row mt-2 justify-left items-center sm:space-x-2">
                <div class="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
                    <enhanced:img src={partner.imgComp} alt={partner.imgAlt} class="h-20 w-auto"/>
                </div>
                <a
                    href={partner.ref}
                    class="text-black text-lg font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lead Partner"
                >
                    {partner.name}
                </a>
            </div>
        {/if}
        <div class="prose max-w-none text-justify mt-4 mb-4">
            <data.content />
        </div>
    </div>
</section>