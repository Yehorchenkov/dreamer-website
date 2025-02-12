
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

<!-- <ul class="max-w-6xl text-gray-600 list-inside space-y-4">
    {#each goals as { title, description } }
      <li class="flex flex-col sm:flex-row items-start sm:items-center md:space-x-8">
        
        <div class="w-full sm:w-1/4 flex items-center space-x-2">
          <svg
            class="w-3.5 h-3.5 text-primary shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <p class="text-primary text-xl">{title}</p>
        </div>
        
        <div class="w-full sm:w-3/4">
          <p class="text-xl">{description}</p>
        </div>
      </li>
    {/each}
</ul> -->

<div class="max-w-screen-xl mx-auto space-y-2 md:space-y-4">
    {#each goals as { title, description }}
        <div class="w-full text-primary bg-white border border-gray-200 rounded-lg shadow-sm p-2">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight">{ title }</h5>
            <p class="font-normal text-gray-700">{ description }</p>
        </div>
    {/each}
</div>