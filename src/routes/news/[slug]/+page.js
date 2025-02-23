import { error } from '@sveltejs/kit';

export async function load({ params }) {

    try {
        const newsItem = await import(`../../../content/news/${params.slug}.md`);

        return {
            content: newsItem.default,
            meta: newsItem.metadata
        }
    } catch (e) {
        return error(404, 'Could not find ${params.slug}');
    }
}