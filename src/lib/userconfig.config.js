/** @type {import('$lib/types/types').userconfig} */
const userconfig = {
	title: 'My website',
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
			category: 'Heading 1',
			children: [
				{
					text: 'Home',
					link: '/'
				},
				{
					text: 'Markdown Test',
					link: '/MarkdownTest'
				},
				{
					text: 'HTML Test',
					link: '/HtmlTest'
				}
			]
		}
	]
};

export default userconfig;
