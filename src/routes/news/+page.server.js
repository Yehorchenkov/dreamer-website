export async function load({ fetch }) {
    const res = await fetch('api/news');
    const news = await res.json();
    return { news }
}