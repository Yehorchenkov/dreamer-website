<script>
	import ButtonLight from '$lib/ui/primitives/button-light.svelte';
	import HeroImage from '$lib/images/hero-image.png?enhanced';

	let loaded = $state(false);
</script>

<section class="flex items-center justify-center">
	<div
		class="relative m-2 flex w-full flex-col items-center gap-x-6 rounded-lg border border-gray-300 bg-radial-[at_25%_25%] from-yellow-700 to-yellow-400 shadow-lg lg:m-10 lg:flex-row"
	>
		<!-- Left side: text content -->
		<div class="flex flex-col items-center justify-center p-8 text-gray-200 lg:w-1/2">
			<h1 class="mb-4 text-4xl font-bold">
				DREAMER -<br /><span class="text-2xl"
					>Transforming Education to Tackle Global Challenges</span
				>
			</h1>
			<p class="text-md mb-6 text-justify lg:text-xl">
				The Development and Reconstruction Empowerment through Advanced Project Management Education
				and Research (DREAMER) project is poised to make a profound and lasting impact, not only by
				enhancing project management education across Europe but also by supporting Ukraine's
				journey toward recovery and resilience. By fostering collaboration, promoting
				sustainability, and equipping students with the skills to lead in a digitalized world,
				DREAMER sets a new standard for educational innovation.
			</p>
			<ButtonLight href="/about" text="Learn more" />
		</div>

		<!-- Right side: image positioned at bottom right -->
		<div class="flex items-end lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 lg:justify-end">
			{#if !loaded}
				<p class="text-gray-200">
					Loading image…
				</p>
			{/if}
			<enhanced:img
				src={HeroImage}
				alt="construction site"
				fetchpriority="high"
				loading="eager"
				class="z-20 w-full rounded-lg object-cover lg:h-auto lg:max-h-full lg:w-auto"
				onload={() => (loaded = true)}
			>
			</enhanced:img>
		</div>
	</div>
</section>
