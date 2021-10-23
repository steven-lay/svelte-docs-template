export default interface userconfig {
	title?: string;
	navbar?: navbarItem[];
	sidebar?: sidebarItem[];
	prefetchAllRoutes?: boolean;
	hideLoadbar?: boolean;
	hideTOC?: boolean;
	pageTransitions?: pageTransitions;
	pageWidth?: number;
	TOCdepth?: number;
}

export interface navbarItem {
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
	children: navbarItem[];
}
