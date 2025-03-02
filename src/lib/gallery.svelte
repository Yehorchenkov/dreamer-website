<script>
    import { photoswipe } from '$lib/actions.svelte';

    let { directory } = $props();
    let galleryImages = $state([]);

    const imageModules = import.meta.glob(
		'/src/lib/images/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	)

    // Filter images based on path
    const filteredImages = Object.fromEntries(
        Object.entries(imageModules).filter(([imgPath]) =>
            imgPath.includes(`/${directory}`)
        )
    );

    galleryImages = Object.entries(filteredImages).map(([_path, module]) => {
        console.log("Module.default", module.default);
        return {
            src: module.default,
            href: module.default.img.src,
            width: 1280,  // Default width
            height: 800  // Default height
        };
    });

    $effect(() => {
        galleryImages.forEach((img, index) => {
            const image = new Image();
            image.onload = () => {
                galleryImages[index].width = image.naturalWidth;
                galleryImages[index].height = image.naturalHeight;
                galleryImages = galleryImages; // Trigger reactivity
            };
            image.src = img.href;
        });
    });

</script>

<div use:photoswipe class="pswp-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
    {#each galleryImages as img}
        <a
            href={img.href}
            data-pswp-width={img.width}
            data-pswp-height={img.height}
            target="_blank"
            aria-label="View full size image"
        >
            <enhanced:img
                src={img.src} alt="Image from {directory}"
                class="h-64 w-full rounded-sm object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
        </a>
    {/each}
</div>