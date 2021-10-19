import remarkSlug from 'remark-slug';
import remarkAbmonitions from 'remark-admonitions';
import lazyLoadPlugin from 'rehype-plugin-image-native-lazy-loading';

const config = {
	extensions: ['.md', '.svx'],
	remarkPlugins: [remarkSlug, remarkAbmonitions],
	rehypePlugins: [lazyLoadPlugin],
	layout: 'src/lib/layouts/MarkdownLayout.svelte'
};

export default config