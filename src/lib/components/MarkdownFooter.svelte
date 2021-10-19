<script lang="ts">
import { page } from '$app/stores'
import { childlink } from '$lib/stores/childlinks'

let curPos = $childlink.findIndex((mem) => $page.path === mem.link)
</script>

<hr />

<div class="flex-wrapper">
  <div class="footer-item-left">
    {#if curPos > 0}
      <div class="footer-page-text">Previous page</div>
      <div>
        <a sveltekit:noscroll href="{$childlink[curPos - 1].link}">
          <span class="arrow arrow-left">←</span>
          <span class="arrow-text">{$childlink[curPos - 1].text}</span>
        </a>
      </div>
    {/if}
  </div>
  <div class="footer-item-right">
    {#if curPos < $childlink.length - 1}
      <div class="footer-page-text">Next page</div>
      <div>
        <a sveltekit:noscroll href="{$childlink[curPos + 1].link}">
          <span class="arrow-text">{$childlink[curPos + 1].text}</span>
          <span class="arrow arrow-right">→</span>
        </a>
      </div>
    {/if}
  </div>
</div>

<style>
.flex-wrapper {
  display: flex;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-bottom: 2rem;
}

.footer-item-left {
  width: 50%;
}

.footer-item-right {
  width: 50%;
  text-align: right;
}

.arrow {
  font-size: var(--bodyFontSize);
  color: var(--primaryMedium);
}

.arrow-text {
  font-size: var(--bodyFontSize);
  font-weight: 600;
}

.arrow-left {
  margin-right: 0.5rem;
}

.arrow-right {
  margin-left: 0.5rem;
}

hr {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none !important;
}

.footer-page-text {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.125rem;
}

@media only screen and (max-width: 425px) {
  .arrow-right {
    margin-left: 0.25rem;
  }

  .arrow-left {
    margin-right: 0.25rem;
  }
}
</style>
