<script lang="ts">
import { navigating } from '$app/stores'

let showLoadingBar = false

$: if ($navigating?.from.path !== $navigating?.to.path) {
  showLoadingBar = true
} else {
  showLoadingBar = false
}

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
