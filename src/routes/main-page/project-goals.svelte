
<script>
    const goals = [
        {
            title: "Support Ukraine’s Rebuilding Efforts.",
            description: "Equip a new generation of project managers to lead reconstruction and development projects in Ukraine, estimated to require €1 trillion in investment."
        },
        {
            title: "Drive Educational Innovation.",
            description: "Introduce student-centered, challenge-based learning approaches with an emphasis on digital and green skills."
        },
        {
            title: "Foster International Collaboration.",
            description: "Strengthen academic networks across Europe and Ukraine, promoting joint research and knowledge sharing."
        },
        {
            title: "Promote Sustainability.",
            description: "Embed environmentally conscious practices in project management education to align with global climate goals."
        }
    ];
</script>

<div class="max-w-screen-xl mx-auto space-y-2 md:space-y-4">
    {#each goals as { title, description }}
        <div class="w-full text-primary bg-white border border-gray-200 rounded-lg shadow-sm p-2">
            <h5 class="mb-2 text-2xl font-semibold">{ title }</h5>
            <p class="font-normal text-gray-700">{ description }</p>
        </div>
    {/each}
</div>