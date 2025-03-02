import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export function photoswipe(node, options) {
    $effect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: node,
            children: 'a',
            pswpModule: () => import('photoswipe'),
            ...options,
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    });
}