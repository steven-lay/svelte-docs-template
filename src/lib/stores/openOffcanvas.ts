import { writable } from "svelte/store";

function createStore() {
	const { subscribe, set } = writable(false);

    return {
        subscribe,
        set: (n: boolean) => set(n),
    }

}

export const openOffCanvas = createStore();