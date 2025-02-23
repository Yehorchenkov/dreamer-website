import { error } from '@sveltejs/kit'

export async function load() {
	try {
		const res = await import(`../../content/about.md`)
		
        return {
			content: res.default,
			meta: res.metadata
		}
	} catch (e) {
		error(404, `Could not find About the Project page`)
	}
}