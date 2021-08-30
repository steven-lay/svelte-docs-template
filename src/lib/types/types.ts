export interface userconfig {
	title?: string;
	navbar?: Array<navbarItem>;
	sidebar?: any;
}

interface navbarItem {
	text: string;
	link: string;
}
