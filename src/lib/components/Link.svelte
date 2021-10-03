<script lang="ts">
import { page } from '$app/stores'

export let to: string
export let noscroll = false

function isExternalLink(): boolean {
  return to.startsWith('http')
}
</script>

<a
  class="{$$props.class}"
  href="{to}"
  sveltekit:prefetch="{to.startsWith('http') ? undefined : true}"
  sveltekit:noscroll="{noscroll ? true : undefined}"
  class:active-link="{$page.path == to}"
  target="{isExternalLink() ? '_blank' : undefined}"
  rel="{isExternalLink() ? 'noopener noreferrer' : undefined}"
  on:click
>
  <slot />
</a>
