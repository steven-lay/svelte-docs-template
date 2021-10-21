<script lang="ts">
import { onDestroy } from 'svelte'
import { getStores } from '$app/stores'

let showLoadingBar = false

let timer: NodeJS.Timeout

/* If it takes more than 100 ms to load another page, show loading bar */
getStores().navigating.subscribe((nav) => {
  clearTimeout(timer)
  /* If navigating to a different page */
  if (nav?.from.path != nav?.to.path) {
    timer = setTimeout(() => {
      showLoadingBar = true
    }, 100)
  } else {
    showLoadingBar = false
  }
})

onDestroy(() => {
  clearTimeout(timer)
})

function loadIn(node: Element, { duration = 1500 }) {
  const style = getComputedStyle(node)
  const width = parseFloat(style.width)

  return {
    duration,
    css: (t: number) => `width: ${t * width}px;`,
  }
}

function loadOut(node: Element, { duration = 400 }) {
  const style = getComputedStyle(node)
  const opacity = +style.opacity

  return {
    duration,
    css: (t: number) => `opacity: ${t * opacity};` + `width: 100%`,
  }
}
</script>

{#if showLoadingBar}
  <div class="loading-bar" in:loadIn out:loadOut="{{ duration: 300 }}"></div>
{/if}

<style>
.loading-bar {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgb(169, 127, 199);
}
</style>
