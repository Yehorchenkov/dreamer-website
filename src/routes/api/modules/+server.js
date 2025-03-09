import { json } from '@sveltejs/kit';
import { render } from 'svelte/server';
import { parseDate, truncateHtml, getDetailedSlug } from '$lib/utils';

async function getModules() {
    let modules = [];

    const paths = import.meta.glob('/src/content/modules/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = getDetailedSlug(path);

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata;
            const module = { ...metadata, slug };
            modules.push(module);
        }
    }

    modules = modules.sort((a, b) => a.id - b.id);

    return modules;
}

export async function GET() {
    const modules = await getModules();

    if (modules) {
        return json(modules);
    }

    return json({error: 'No modules found'}, {status: 404});
}