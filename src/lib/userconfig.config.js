/** @type {import('$lib/types/types').userconfig} */
const userconfig = {
	title: 'My docs site',
	preloadRoutes: true,
	navbar: [
		{
			text: 'Github',
			link: 'http://github.com/'
		},
		{
			text: 'Test',
			link: 'http://www.google.com/'
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
