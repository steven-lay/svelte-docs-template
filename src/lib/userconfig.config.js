/** @type {import('$lib/types/userconfig').default} */
const userconfig = {
	title: 'My docs site',
	prefetchAllRoutes: true,
	hideTOC: false,
	hideLoadbar: false,
	pageWidth: 88,
	TOCdepth: 2,
	pageTransitions: {
		enabled: true,
		inDuration: 500,
		outDuration: 300,
	},
	navbar: [
		{
			text: 'Github',
			link: 'http://github.com/'
		},
		{
			text: 'Blog',
			link: '/blog'
		}
	],
	sidebar: [
		{
			category: 'Introduction',
			children: [
				{
					text: 'Home',
					link: '/'
				},
				{
					text: 'Features',
					link: '/features'
				}
			]
		},
		{
			category: 'Test pages',
			children: [
				{
					text: 'HTML test',
					link: '/test-pages/html-test'
				},
				{
					text: 'Markdown test',
					link: '/test-pages/markdown-test'
				}
			]
		},
	]
};

export default userconfig;
