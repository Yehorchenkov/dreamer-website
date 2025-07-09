<script>
	import { NavigationMenu } from 'bits-ui';
	import Icon from '@iconify/svelte';

	let { data } = $props();
</script>

<NavigationMenu.Root class="hidden relative z-10 md:flex w-full justify-center">
	<NavigationMenu.List class="relative flex space-x-6 text-xl lg:space-x-12 p-1">
		<NavigationMenu.Item>
			<NavigationMenu.Link class="text-primary hover:text-blue-600" href="/about">
				About
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link class="text-primary hover:text-blue-600" href="/news">
				News
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item value="modules">
			<NavigationMenu.Trigger
				class="group inline-flex items-center justify-center text-primary data-[state=open]:text-blue-600 transition-colors"
			>
				Modules
				<Icon
					icon="uil:angle-down"
					class="h-5 w-5 mt-1 origin-center group-data-[state=open]:rotate-180 transition-transform duration-200"
					aria-hidden="true"
				/>
			</NavigationMenu.Trigger>
			<NavigationMenu.Content
				class="absolute left-1/2 transform -translate-x-1/2 border border-gray-100 mt-2 w-128 origin-top bg-white rounded-md shadow-lg p-2"
			>
				<ul class="flex flex-col p-4 gap-y-1.5">
					{#each data.modules as { title, slug }}
						<li>
							<NavigationMenu.Link class="text-primary hover:text-blue-600" href="/{slug}">
								{title}
							</NavigationMenu.Link>
						</li>
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
	<div
    	class="perspective-[200px] absolute left-0 top-full flex w-full justify-center"
  	>
		<NavigationMenu.Viewport />
	</div>
</NavigationMenu.Root>

<!-- <NavigationMenu.Root class="hidden md:flex relative z-10 w-full justify-center">
	<NavigationMenu.List
		class="group flex list-none items-center justify-center space-x-6 text-xl lg:space-x-12 p-1"
		aria-label="Main navigation"
	>
		<NavigationMenu.Item>
			<NavigationMenu.Link class="text-primary hover:text-blue-600" href="/about">
				About
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link class="text-primary hover:text-blue-600" href="/news">
				News
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item value="modules">
			<NavigationMenu.Trigger
				class="text-primary group inline-flex w-max items-center justify-center data-[state=open]:text-blue-600 transition-colors"
				aria-label="Modules"
			>
				Modules
				<Icon
					icon="uil:angle-down"
					class="h-5 w-5 mt-1 origin-center group-data-[state=open]:rotate-180 transition-transform duration-200"
					aria-hidden="true"
				/>
			</NavigationMenu.Trigger>
			<NavigationMenu.Content class="absolute top-0 left-0 w-[300px] bg-white rounded-md shadow-lg p-2">
				<ul class="flex flex-col p-4 gap-y-1.5">
					{#each data as module}
						<li>
							<NavigationMenu.Link class="text-primary hover:text-blue-600" href="/{module.slug}">
								{module.title}
							</NavigationMenu.Link>
						</li>
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>

	<NavigationMenu.Viewport
		class="absolute top-full mt-2 w-auto origin-[top_center]"
	/>
</NavigationMenu.Root> -->

<!-- <NavigationMenu.Root class="relative z-10 flex w-full justify-center">
	<NavigationMenu.List class="group flex list-none items-center justify-center p-1">
		<NavigationMenu.Item>
			<NavigationMenu.Link
				class="group hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
				href="/about"
			>
				About the Project
			</NavigationMenu.Link>
		</NavigationMenu.Item>
        <NavigationMenu.Item>
			<NavigationMenu.Link
				class="group hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
				href="/team"
			>
				Our Team
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Indicator
			class="data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in top-full z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-100 transition-[all,transform_250ms_ease] duration-200 data-[state=hidden]:opacity-0"
		>
			<div class="bg-border relative top-[70%] size-2.5 rotate-[45deg] rounded-tl-[2px]"></div>
		</NavigationMenu.Indicator>
	</NavigationMenu.List>
	<div class="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
		<NavigationMenu.Viewport
			class="text-popover-foreground bg-background data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in relative mt-2.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border shadow-lg transition-[width,_height] duration-200 sm:w-[var(--bits-navigation-menu-viewport-width)] "
		/>
	</div>
</NavigationMenu.Root> -->
