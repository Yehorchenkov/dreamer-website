<script>
	import { onMount } from 'svelte';

	import Hero from './main-page/hero.svelte';
	import ProjectGoals from './main-page/project-goals.svelte';
	import KeyFacts from './main-page/key-facts.svelte';
	import News from './main-page/news.svelte';
	import Modules from './main-page/modules.svelte';

	let { data } = $props();

	let partnersSection = $state();
	let mapComponent = $state(null);
	let mapLoadStarted = $state(false);

	async function loadMapSection() {
		if (mapLoadStarted) return;
		mapLoadStarted = true;
		const module = await import('./main-page/map.svelte');
		mapComponent = module.default;
	}

	onMount(() => {
		if (!('IntersectionObserver' in window)) {
			loadMapSection();
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						loadMapSection();
						observer.disconnect();
						break;
					}
				}
			},
			{ rootMargin: '200px 0px' }
		);

		if (partnersSection) {
			observer.observe(partnersSection);
		}

		return () => observer.disconnect();
	});

	const sections = [
		{
			title: 'About the project',
			content: Hero
		},
		// {
		//     title: "Project mission",
		//     content: ProjectMission
		// },
		{
			title: 'Project goals',
			content: ProjectGoals
		},
		{
			title: 'Key facts',
			content: KeyFacts
		},
		{
			title: 'News',
			content: News
		},
		// {
		//     title: "Modules",
		//     content: Modules
		// },
		{
			title: 'Partners',
			content: null
		}
	];
</script>

<div class="mx-auto max-w-screen-xl">
	{#each sections as { title, content } (title)}
		<div class="flex flex-col lg:flex-row">
			<!-- Section Name (left on md, top on small screens) -->
			<div class="flex items-center justify-center p-4 lg:w-8 lg:p-0">
				<h1
					class="text-primary text-xl font-semibold whitespace-nowrap uppercase md:transform lg:-rotate-90"
				>
					{title}
				</h1>
			</div>

			<!-- Section Content (right on md, bottom on small screens) -->
			<div class="flex w-full items-center p-4">
				{#if title === 'Partners'}
					<div class="w-full" bind:this={partnersSection}>
						{#if mapComponent}
							{@const LazyMap = mapComponent}
							<LazyMap />
						{:else}
							<div class="h-64 w-full animate-pulse rounded-lg bg-gray-100"></div>
						{/if}
					</div>
				{:else if content}
					{@const Component = content}
					{#if content === News || content === Modules}
						<Component {data} />
					{:else}
						<Component />
					{/if}
				{/if}
			</div>
		</div>
	{/each}
</div>
