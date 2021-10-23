<script lang="ts">
export let headingsList: NodeListOf<Element>

let curAnchor = -1
let scrollY: number

/* Update active anchor on scroll */
$: if (scrollY && headingsList) {
  updateAnchor()
}

function updateAnchor() {
  const offsetTop = 105

  headingsList.forEach((heading, i) => {
    if (
      heading.getBoundingClientRect().top < offsetTop &&
      heading.getBoundingClientRect().top > 0
    ) {
      curAnchor = i
    } else if (
      curAnchor >= 0 &&
      headingsList[curAnchor].getBoundingClientRect().top > offsetTop
    ) {
      curAnchor -= 1
    }
  })
}
</script>

<svelte:window bind:scrollY />

{#if headingsList}
  <h4 class="select-none">ON THIS PAGE</h4>
  {#each headingsList as heading, i}
    <a
      class="toc-link select-none"
      class:toc-link-h2="{heading.nodeName == 'H2'}"
      class:toc-link-h3="{heading.nodeName == 'H3'}"
      class:toc-link-h4="{heading.nodeName == 'H4'}"
      class:toc-active="{curAnchor == i}"
      class:toc-past-active="{i < curAnchor}"
      href="#{heading.id}"
    >
      {heading.textContent}
    </a>
  {/each}
{/if}

<style>
h4 {
  color: var(--primaryDark);
  margin-top: 0;
  padding-bottom: 0.75rem;
  margin-bottom: 0;
  letter-spacing: -0.025em;
}

.toc-link {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  color: rgba(0, 0, 0, 0.7);
  display: block;
  text-decoration: none;
  font-size: 1rem;
  border-left: 2px solid rgba(0, 0, 0, 0.075);
  transition: color 0.25s;
}

.toc-link:hover {
  color: var(--primaryMedium) !important;
}

.toc-link-h2 {
  padding-left: 1rem;
}

.toc-link-h3 {
  padding-left: 2rem;
}

.toc-link-h4 {
  padding-left: 3rem;
}

.toc-link:visited {
  color: rgba(0, 0, 0, 0.7);
}

/* Highlight current anchor */
.toc-active {
  color: var(--primaryMedium) !important;
  font-weight: 600;
}

/* Dim the anchors that have been scrolled past */
.toc-past-active {
  color: rgba(0, 0, 0, 0.45) !important;
}
</style>
