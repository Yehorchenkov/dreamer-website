export async function load({ fetch }) {
    const res = await fetch('/api/modules');
    const modules = await res.json();
    return { modules }
}