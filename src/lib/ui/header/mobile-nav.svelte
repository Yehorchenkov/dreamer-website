<script>
	import Drawer from '$lib/ui/primitives/Drawer.svelte';
	import Icon from '@iconify/svelte';
	import ButtonRef from '$lib/ui/primitives/button-ref.svelte';
	import { Button } from 'bits-ui';
	import logo from '$lib/images/Dreamer_colour.svg';

	let { data } = $props();
	let open = $state(false);
</script>

<div class="flex items-center justify-center bg-white md:hidden">
	<Drawer
		bind:open
		side="left"
		swipeEnabled
		swipeOpenFromEdge
		contentClass="rounded-r-lg border-gray-100 bg-white"
		headerClass="border-b-0 pb-0"
		bodyClass="px-4 pt-2 pb-4"
		showCloseButton={false}
	>
		{#snippet trigger()}
			<span class="text-primary z-10 flex items-center p-2 hover:text-blue-600">
				<Icon icon="uil:bars" class="h-8 w-8" aria-hidden="true" />
				<span class="sr-only">Open navigation menu</span>
			</span>
		{/snippet}

		{#snippet title()}
			<Button.Root href="/" class="z-10 mb-2 flex items-center" onclick={() => (open = false)}>
				<img src={logo} alt="DREAMER logo" class="h-8 w-auto hover:opacity-80" />
			</Button.Root>
		{/snippet}

		<div class="flex flex-1">
			<ul class="ml-4 flex grow flex-col space-y-2">
				<li>
					<ButtonRef class="text-primary hover:underline" href="/about" text="About" />
				</li>

				<li>
					<ButtonRef class="text-primary hover:underline" href="/news" text="News" />
				</li>

				<li>
					<div class="text-primary">Modules</div>
					<ul class="ml-4 mt-2 flex flex-col space-y-2">
						{#each data.modules as { title, slug } (slug)}
							<li>
								<ButtonRef
									class="text-primary hover:underline"
									href={`/${slug}`}
									text={title}
								/>
							</li>
						{/each}
					</ul>
				</li>
			</ul>

			<div class="flex items-center justify-center">
				<div class="mx-auto mb-8 h-20 w-1.5 shrink-0 rounded-full bg-zinc-300"></div>
			</div>
		</div>

		{#snippet footer()}
			<div class="flex justify-end">
				<button
					type="button"
					class="text-muted-foreground hover:text-foreground inline-flex items-center"
					onclick={() => (open = false)}
					aria-label="Close navigation menu"
				>
					<Icon icon="uil:times" class="h-8 w-8" aria-hidden="true" />
				</button>
			</div>
		{/snippet}
	</Drawer>
</div>