import { writable } from 'svelte/store';

function createArray() {
	const { subscribe, set } = writable([]);

	return {
		subscribe,
		set: (n) => set(n)
	};
}

export const headingsList = createArray();
