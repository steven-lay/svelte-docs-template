export interface userconfig {
	title?: string;
	navbar?: Array<navbarItem>;
}

interface navbarItem {
	text: string;
	link: string;
}
