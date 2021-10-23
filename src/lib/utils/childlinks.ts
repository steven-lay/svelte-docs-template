import config from '$lib/userconfig.config'
import type { navbarItem } from '$lib/types/userconfig'

export function getChildLinks(): navbarItem[] {
    const childLinks = config.sidebar.reduce((accum, next) => 
      [...accum, ...next.children],[]
    )

  return childLinks
}
