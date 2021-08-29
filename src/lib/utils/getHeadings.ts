import { headingsList } from '$lib/stores/headingsList';

export function getHeadings(node: HTMLElement): void {
	headingsList.set(node.querySelectorAll('h2, h3, h4'));
}