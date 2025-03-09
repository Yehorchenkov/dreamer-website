import { error } from '@sveltejs/kit';

export async function load({ params }) {

    try {
        const module = await import(`../../../content/modules/${params.slug}.md`);

        return {
            content: module.default,
            meta: module.metadata
        }
    } catch (e) {
        return error(404, `Could not find ${params.slug}`);
    }
}