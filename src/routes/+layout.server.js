export async function load({ fetch }) {
    // Load news data
    const resNews = await fetch('/api/news');
    const news = await resNews.json();

    // Load modules data
    const resModules = await fetch('/api/modules');
    const modules = await resModules.json();

    return { news, modules };
}