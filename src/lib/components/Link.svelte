<script lang="ts">
import { page } from '$app/stores'

export let to: string
export let noscroll: boolean = false
</script>

<a
  class="{$$props.class}"
  href="{to}"
  sveltekit:prefetch="{to.startsWith('http') ? undefined : true}"
  sveltekit:noscroll="{noscroll ? true : undefined}"
  class:active-link="{$page.path == to}"
  target="{to.startsWith('http') ? '_blank' : undefined}"
  rel="{to.startsWith('http') ? 'noopener noreferrer' : undefined}"
  on:click
>
  <slot />
</a>
