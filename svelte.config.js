import { mdsvex } from 'mdsvex';

// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: '_site',
			assets: '_site',
			fallback: '404.html',
			precompress: false,
			strict: true
		})
	},

	preprocess: [mdsvex(mdsvexOptions)],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
