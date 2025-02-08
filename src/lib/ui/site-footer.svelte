<script>
    import Icon from "@iconify/svelte";
    import { Button } from "bits-ui";
    import logoFull from "$lib/images/DREAMER_colour_full.svg";
    import logoEU from "$lib/images/EN_Co-fundedbytheEU_RGB_POS.png?enhanced";
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
                    <ul class="text-gray-500  font-medium">
                        <li class="mb-4">
                            <Button.Root href="/" class="hover:underline">Link 1</Button.Root>
                        </li>
                        <li class="mb-4">
                            <Button.Root href="/" class="hover:underline">Link 2</Button.Root>
                        </li>
                        <li>
                            <Button.Root href="/" class="hover:underline">Link 3</Button.Root>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4 flex space-x-2 items-center">
                            <Button.Root
                                href="https://facebook.com/groups/631008452638298"
                                target="_blank"
                                class="hover:underline"
                            >
                                Facebook
                            </Button.Root>
                            <Icon icon="uil:external-link-alt" />
                        </li>
                        <li class="mb-4 flex space-x-2 items-center">
                            <Button.Root
                                href="https://www.linkedin.com/groups/10048753"
                                target="_blank"
                                class="hover:underline"
                            >
                                LinkedIn
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
                            <div class="flex space-x-2">
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
                            <div class="flex space-x-2">
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
