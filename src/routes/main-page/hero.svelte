<script>
    import ButtonLight from "$lib/ui/primitives/button-light.svelte";
</script>

<section class="flex items-center justify-center">
    <div class="flex flex-col md:flex-row items-center gap-x-6 w-full m-2 md:m-10 bg-radial-[at_25%_25%] from-cyan-500 to-primary border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <!-- Left side: text content -->
        <div class="md:w-1/2 p-8 flex flex-col items-center justify-center text-gray-200">
            <h1 class="text-4xl font-bold mb-4">
                DREAMER -<br /><span class="text-2xl">Transforming Education to Tackle Global Challenges</span>
            </h1>
            <p class="text-lg mb-6 text-justify">
                The DREAMER project is poised to make a profound and lasting impact,
                not only by enhancing project management education across Europe but also by supporting Ukraine’s journey
                toward recovery and resilience. By fostering collaboration, promoting sustainability,
                and equipping students with the skills to lead in a digitalized world,
                DREAMER sets a new standard for educational innovation.
            </p>
            <ButtonLight ref="/about" text="Learn more" />
        </div>

        <!-- Right side: image -->
        <div class="md:w-1/2 flex items-center justify-center p-8">
            <div class="flex items-center justify-center w-64 h-64 animate-pulse bg-gray-300 rounded-lg md:w-96 md:h-96 dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
            <!-- <enhanced:img 
                src="$lib/images/hero-image.webp" 
                alt="man and woman found exit from a labyrinth" 
                class="z-20 w-64 h-64 md:w-96 md:h-96 rounded-lg"
            /> -->
        </div>

    </div>
  </section>

