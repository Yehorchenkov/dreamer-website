<script>
	import { Drawer } from 'vaul-svelte';
	import Icon from '@iconify/svelte';
	import ButtonRef from '$lib/ui/primitives/button-ref.svelte';
    import { Button } from 'bits-ui';
    import logo from "$lib/images/Dreamer_colour.svg";

	let { data } = $props();
</script>

<div data-vaul-drawer-wrapper class="flex md:hidden items-center justify-center bg-white">
	<Drawer.Root direction="left">
		<Drawer.Trigger class="text-primary z-10 flex items-center p-2 hover:text-blue-600">
			<Icon icon="uil:bars" class="h-8 w-8" aria-hidden="true" />
		</Drawer.Trigger>
		<Drawer.Portal>
			<Drawer.Overlay class="fixed inset-0 bg-black/40" />
			<Drawer.Content
				class="fixed right-0 bottom-0 left-0 z-50 mt-24 flex h-full w-[85%] flex-col rounded-r-lg border border-gray-100 bg-white p-4 shadow-lg"
			>
                <Drawer.Close class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <Icon icon="uil:times" class="h-8 w-8" aria-hidden="true" />
                </Drawer.Close>
				<Drawer.Title>
                    <Button.Root href="/" class="flex items-center z-10 mb-6">
                        <img src="{logo}" alt="DREAMER logo" class="h-8 w-auto hover:opacity-80" />
                    </Button.Root>
                </Drawer.Title>
				<div class="flex flex-1">
					<!-- Left wide column -->
					<ul class="ml-4 items-top justify-left flex-col flex-grow space-y-2">
						<li>
                            <ButtonRef class="text-primary hover:underline" href="/about" text="About" />
                        </li>
                        <li>
                            <ButtonRef class="text-primary hover:underline" href="/news" text="News" />
                        </li>
                        <li>
                            Modules
                            <ul class="ml-4 mt-2 flex flex-col space-y-2">
                                {#each data.modules as { title, slug }}
                                    <li>
                                        <ButtonRef class="text-primary hover:underline" href="/{slug}" text={title} />
                                    </li>
                                {/each}
                            </ul>
                        </li>
                    </ul>
					<!-- Right narrow column for the figure -->
					<div class="flex items-center justify-center">
						<div class="mx-auto mb-8 h-20 w-1.5 flex-shrink-0 rounded-full bg-zinc-300"></div>
					</div>
				</div>
			</Drawer.Content>
		</Drawer.Portal>
	</Drawer.Root>
</div>
