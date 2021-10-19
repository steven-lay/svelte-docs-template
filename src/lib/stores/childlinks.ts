import { readable } from "svelte/store"
import config from '$lib/userconfig.config'

function useChildlink() {
  const store = readable([], (set) => {
    const childLinks = []

    for (const path of config.sidebar) {
      for (const child of path.children) {
        childLinks.push(child)
      }
    }

    set(childLinks)
  })

  return store
}

export const childlink = useChildlink()