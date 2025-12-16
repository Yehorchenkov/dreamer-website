<script>
    import { photoswipe } from '$lib/actions.svelte';

    let { directory } = $props();
    let galleryImages = $state([]);

    const imageModules = import.meta.glob(
        '/src/content/**/*.{avif,gif,heif,heic,jpeg,jpg,png,tiff,webp,svg,JPG,PNG,HEIC,SVG}',
        {
            eager: true,
            query: { enhanced: true }
        }
    );

    const filteredImages = Object.fromEntries(
        Object.entries(imageModules).filter(([imgPath]) => imgPath.includes(`/${directory}`))
    );

    const toGalleryItem = (mod) => {
        const d = mod?.default;

        // "enhanced" images typically look like: { img: { src, w, h }, ... }
        const enhancedHref = d?.img?.src;

        // Some assets (often svg) may just be a URL string
        const plainHref = typeof d === 'string' ? d : d?.src;

        const href = enhancedHref ?? plainHref;
        if (!href) return null;

        return {
            src: d, // keep original for <enhanced:img>
            href,
            enhanced: Boolean(enhancedHref),
            width: d?.img?.w ?? 1280,
            height: d?.img?.h ?? 800
        };
    };

    galleryImages = Object.entries(filteredImages)
        .map(([_path, mod]) => toGalleryItem(mod))
        .filter(Boolean);

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
            {#if img.enhanced}
                <enhanced:img
                    src={img.src}
                    alt="Image from {directory}"
                    class="h-64 w-full rounded-sm object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
            {:else}
                <img
                    src={img.href}
                    alt="Image from {directory}"
                    class="h-64 w-full rounded-sm object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                    loading="lazy"
                />
            {/if}
        </a>
    {/each}
</div>