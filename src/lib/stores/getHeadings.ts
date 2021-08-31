import { writable } from "svelte/store";

function createStore() {
	const { subscribe, set } = writable([]);

    return {
        subscribe,
        set: (n) => set(n),
    }

}

export const headingsList = createStore();