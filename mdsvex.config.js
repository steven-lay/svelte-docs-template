import remarkSlug from 'remark-slug';
import remarkAbmonitions from 'remark-admonitions';

export default {	
	extensions: ['.md', '.svx'],
	remarkPlugins: [remarkSlug, remarkAbmonitions],
	rehypePlugins: [],
	layout: 'src/lib/layouts/MarkdownLayout.svelte'
};