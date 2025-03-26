<script>
    import Icon from "@iconify/svelte";
    import { Button } from "bits-ui";
    import logoFull from "$lib/images/DREAMER_colour_full.svg";
    import logoEU from "$lib/images/EN_Co-fundedbytheEU_RGB_POS.png?enhanced";
    import { siteConfig } from "$lib/config/site";
</script>

<footer class="bg-gray-100">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <Button.Root href="/" class="flex items-center">
                    <img src="{logoFull}" alt="DREAMER logo full" class="h-24 w-full hover:opacity-80" />
                </Button.Root>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Links</h2>
                    <ul class="text-gray-500 font-medium">
                        <li class="mb-4">
                            <Button.Root href="/about" class="hover:underline">About</Button.Root>
                        </li>
                        <li class="mb-4">
                            <Button.Root href="/news" class="hover:underline">News</Button.Root>
                        </li>
                        <li class="mb-4">
                            <Button.Root href="/modules" class="hover:underline">Modules</Button.Root>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4 flex space-x-2 items-center">
                            <Button.Root
                                href={siteConfig.links.facebook}
                                target="_blank"
                                class="hover:underline"
                            >
                                Facebook
                            </Button.Root>
                            <Icon icon="uil:external-link-alt" />
                        </li>
                        <li class="mb-4 flex space-x-2 items-center">
                            <Button.Root
                                href={siteConfig.links.linkedin}
                                target="_blank"
                                class="hover:underline"
                            >
                                LinkedIn
                            </Button.Root>
                            <Icon icon="uil:external-link-alt" />
                        </li>
                        <li class="mb-4 flex space-x-2 items-center">
                            <Button.Root
                                href={siteConfig.links.youtube}
                                target="_blank"
                                class="hover:underline"
                            >
                                Youtube
                            </Button.Root>
                            <Icon icon="uil:external-link-alt" />
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-2 text-sm font-semibold text-gray-900 uppercase">Contacts</h2>
                    <ul class="text-gray-500 font-medium">
                        <li class="mb-4">
                            <p class="text-primary">Project Coordinator:</p>
                            <div class="flex-row lg:flex lg:space-x-2">
                                <p>Oleksii Yehorchenkov,</p>
                                <Button.Root class="hover:underline" href="https://spectra-perseus.org">
                                    Spectra CE EU
                                </Button.Root>
                            </div>
                            <Button.Root class="hover:text-primary text-sm" href="mailto:oleksii.yehorchenkov@stuba.sk">
                                oleksii.yehorchenkov@stuba.sk
                            </Button.Root>
                        </li>
                        <li>
                            <p class="text-primary">Project Administrator:</p>
                            <div class="flex-row lg:flex lg:space-x-2">
                                <p>Nataliia Yehorchenkova,</p>
                                <Button.Root class="hover:underline" href="https://spectra-perseus.org">
                                    Spectra CE EU
                                </Button.Root>
                            </div>
                            <Button.Root class="hover:text-primary text-sm" href="mailto:nataliia.yehorchenkova@stuba.sk">
                                nataliia.yehorchenkova@stuba.sk
                            </Button.Root>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-2 border-primary sm:mx-auto lg:my-4" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <enhanced:img src="{logoEU}" alt="logo EU" class="h-10 w-auto" />
            <span class="text-sm text-gray-500 sm:text-center">
                © 2025 DREAMER. All Rights Reserved.
            </span>
      </div>
    </div>
</footer>
