export interface userconfig {
	title?: string;
	navbar?: Array<navbarItem>;
	sidebar?: Array<sidebarItem>;
	prefetchAllRoutes?: boolean;
	hideLoadbar?: boolean;
	hideTOC?: boolean;
	pageTransitions?: pageTransitions;
	pageWidth?: number;
	TOCdepth?: number;
}

interface navbarItem {
	text: string;
	link: string;
}

interface pageTransitions {
	enabled?: boolean,
	inDuration?: number,
	outDuration?: number
}

interface sidebarItem {
	category: string;
	children: Array<navbarItem>;
}
