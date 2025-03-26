import { json } from '@sveltejs/kit';
import { render } from 'svelte/server';
import { parseDate, truncateHtml, getDetailedSlug } from '$lib/utils';

async function getNews() {
    let news = [];
    const contentLength = 200;

    const paths = import.meta.glob('/src/content/news/*.md', { eager: true });
    // console.log(paths);

    for (const path in paths) {
        const file = paths[path];
        // const slug = path.split('/').at(-1)?.replace('.md', '');
        const slug = getDetailedSlug(path);

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata;
            // const content = file.default;

            const { html: contentHtml } = render(file.default, {});
            const content = truncateHtml(contentHtml, contentLength);
            // console.log("api/news:\n", metadata, content);
            const newsItem = { ...metadata, slug, content };
            newsItem.published && news.push(newsItem);
        }
    }

    news = news.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    return news;
}

export async function GET() {
    const news = await getNews();

    if (news) {
        return json(news);
    }

    return json({error: 'No news found'}, {status: 404});
}