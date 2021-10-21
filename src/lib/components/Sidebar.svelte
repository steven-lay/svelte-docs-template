<script>
import config from '$lib/userconfig.config'
import Link from '$lib/components/Link.svelte'
import { openOffCanvas } from '$lib/stores/openOffcanvas'

function closeOffcanvas() {
  $openOffCanvas = false
}
</script>

<div>
  {#each config.sidebar as sidebarEntry}
    <h4 class="select-none">{sidebarEntry.category}</h4>
    {#each sidebarEntry.children as child}
      <Link
        class="link"
        noscroll="{true}"
        to="{child.link}"
        on:click="{() => closeOffcanvas()}"
      >
        {child.text}
      </Link>
    {/each}
    <div class="divider"></div>
  {/each}
</div>

<style>
:global(.link) {
  display: block;
  padding-top: 0.5rem;
  padding-left: 0.75rem;
  padding-bottom: 0.5rem;
  margin-right: 2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

:global(.link:visited) {
  color: rgb(55, 65, 81);
}

:global(.link:hover) {
  color: var(--primaryMedium) !important;
}

:global(.link.active-link) {
  border-radius: 0.3rem;
  background-color: var(--primaryLight);
  color: var(--primaryMedium) !important;
}

.divider {
  padding-bottom: 1.5rem;
}

h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1.05rem;
  text-transform: uppercase;
  color: var(--primaryDark);
}
</style>
