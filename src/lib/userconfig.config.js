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
			text: 'Test',
			link: 'http://www.google.com/'
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
				},
				{
					text: 'Markdown Test',
					link: '/markdown-test'
				},
				{
					text: 'HTML Test',
					link: '/html-test'
				}
			]
		}
	]
};

export default userconfig;
