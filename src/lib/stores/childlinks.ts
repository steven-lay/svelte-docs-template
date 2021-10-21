import { readable } from "svelte/store"
import config from '$lib/userconfig.config'

function useChildlink() {
  const store = readable([], (set) => {
    const childLinks = config.sidebar.reduce((accum, next) => 
      [...accum, ...next.children],[]
    )
    set(childLinks)
  })

  return store
}

export const childlink = useChildlink()