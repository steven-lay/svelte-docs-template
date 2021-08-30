export interface userconfig {
	title?: string;
	navbar?: Array<navbarItem>;
	sidebar?: Array<sidebarItem>;
	preloadRoutes?: boolean;
}

interface navbarItem {
	text: string;
	link: string;
}

interface sidebarItem {
	category: string;
	children: Array<navbarItem>;
}
