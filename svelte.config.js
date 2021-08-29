import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import remarkSlug from 'remark-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			smartypants: false,
			remarkPlugins: [remarkSlug],
			layout: 'src/lib/layouts/MarkdownLayout.svelte'
		})
	],

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
