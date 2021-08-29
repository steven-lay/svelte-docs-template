import remarkSlug from 'remark-slug';
import remarkAbmonitions from 'remark-admonitions';

const config = {
    extensions: ['.md', '.svx'],
    remarkPlugins: [remarkSlug, remarkAbmonitions],
    layout: 'src/lib/layouts/MarkdownLayout.svelte'
}

export default config;