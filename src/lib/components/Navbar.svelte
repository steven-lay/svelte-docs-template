<script lang="ts">
import { openOffCanvas } from '$lib/stores/openOffcanvas'
import userconfig from '$lib/userconfig.config'
import MdDehaze from 'svelte-icons/md/MdDehaze.svelte'
import Link from '$lib/components/Link.svelte'
</script>

<header class="header">
  <div class="nav-container">
    <div class="nav-button" on:click="{() => ($openOffCanvas = true)}">
      <MdDehaze />
    </div>
    <div>
      <a class="nav-title" href="/">
        {userconfig.title}
      </a>
    </div>
    <nav class="nav-group">
      {#each userconfig.navbar as navitem}
        <Link class="nav-link" to="{navitem.link}">{navitem.text}</Link>
      {/each}
    </nav>
  </div>
</header>

<style>
.header {
  position: sticky;
  z-index: 1;
  top: 0;
  height: var(--navbarHeight);
  border-bottom: 2px solid rgb(230, 230, 230);
  padding: 1rem 0;
  background-color: white;
}

.nav-container {
  display: flex;
  flex: 1;
  align-items: center;
  max-width: var(--containerWidth);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.125rem;
  padding-right: 1rem;
}

.nav-button {
  height: 1.25rem;
  width: 1.25rem;
  margin-right: 2rem;
  cursor: pointer;
}

.nav-group {
  display: none;
}

@media only screen and (min-width: 992px) {
  .nav-button {
    display: none;
  }

  .nav-group {
    display: inline;
  }

  .nav-container {
    padding-left: 1.75rem;
  }
}

.nav-title {
  margin-right: 2rem;
  text-decoration: none;
  font-weight: 700;
  font-size: var(--bodyFontSize);
  color: var(--primaryDark);
}

:global(.nav-link) {
  display: inline-block;
  transition: color 0.25s;
  font-weight: 600;
  padding: 0.125rem 0.75rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.75);
}

:global(.nav-link:visited) {
  color: black;
}

:global(.nav-link:hover) {
  color: var(--primaryMedium);
}
</style>
