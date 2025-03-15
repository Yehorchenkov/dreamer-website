<script>
    import ButtonLight from "$lib/ui/primitives/button-light.svelte";
</script>

<section class="flex items-center justify-center">
    <div class="flex flex-col lg:flex-row items-center gap-x-6 w-full m-2 lg:m-10 bg-radial-[at_25%_25%] from-yellow-700 to-yellow-400 border border-gray-300 rounded-lg shadow-lg relative">
        <!-- Left side: text content -->
        <div class="lg:w-1/2 p-8 flex flex-col items-center justify-center text-gray-200">
            <h1 class="text-4xl font-bold mb-4">
                DREAMER -<br /><span class="text-2xl">Transforming Education to Tackle Global Challenges</span>
            </h1>
            <p class="text-md lg:text-xl mb-6 text-justify">
                The DREAMER project is poised to make a profound and lasting impact,
                not only by enhancing project management education across Europe but also by supporting Ukraine's journey
                toward recovery and resilience. By fostering collaboration, promoting sustainability,
                and equipping students with the skills to lead in a digitalized world,
                DREAMER sets a new standard for educational innovation.
            </p>
            <ButtonLight ref="/about" text="Learn more" />
        </div>

        <!-- Right side: image positioned at bottom right -->
        <div class="lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2 flex items-end lg:justify-end">
            <enhanced:img 
                src="$lib/images/hero-image.png" 
                alt="construction site" 
                class="z-20 w-full lg:w-auto lg:h-auto lg:max-h-full object-cover rounded-lg"
            />
        </div>
    </div>
</section>

