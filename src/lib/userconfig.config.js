/** @type {import('$lib/types/types').userconfig} */
const userconfig = {
	title: 'My docs site',
	preloadRoutes: false,
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
				},
				{
					text: 'Feature testing',
					link: '/test-pages/feature-testing'
				}
			]
		}
	]
};

export default userconfig;
