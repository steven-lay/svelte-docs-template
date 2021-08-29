<script lang="ts">
	import { headingsList } from '$lib/stores/headingsList';

	let curAnchor = -1;
	let scrollY: number;

	/* Update active anchor on scroll */
	$: updateAnchor(scrollY);

	function updateAnchor(dummy) {
		const offsetTop = 105;

		for (let i = 0; i < $headingsList.length; i++) {
			if (
				$headingsList[i].getBoundingClientRect().top < offsetTop &&
				$headingsList[i].getBoundingClientRect().top > 0
			) {
				curAnchor = i;
			} else if (
				curAnchor >= 0 &&
				$headingsList[curAnchor].getBoundingClientRect().top > offsetTop
			) {
				curAnchor -= 1;
			}
		}
	}
</script>

<svelte:window bind:scrollY />

<h4>ON THIS PAGE</h4>

{#if $headingsList.length}
	{#each $headingsList as heading, i}
		<a
			class="toc-link"
			class:toc-link-h2={heading.nodeName == 'H2'}
			class:toc-link-h3={heading.nodeName == 'H3'}
			class:toc-link-h4={heading.nodeName == 'H4'}
			class:toc-active={curAnchor == i}
			class:toc-past-active={i < curAnchor}
			href="#{heading.id}">{heading.innerText}</a
		>
	{/each}
{/if}

<style>
	h4 {
		color: rgb(49, 46, 129);
		font-weight: 500;
		margin-top: 0;
		padding-bottom: 1rem;
		margin-bottom: 0;
		font-size: 0.95rem;
		letter-spacing: -0.025em;
	}

	.toc-link {
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
		color: rgba(0, 0, 0, 0.7);
		display: block;
		text-decoration: none;
		font-size: 0.95rem;
		border-left: 2px solid rgba(0, 0, 0, 0.075);
		transition: border-left 0.25s, color 0.25s;
	}

	.toc-link:hover {
		color: rgb(79, 70, 229) !important;
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
		color: rgb(79, 70, 229) !important;
		border-left: 2px solid rgb(79, 70, 229);
		font-weight: 500;
	}

	/* Dim the anchors that have been scrolled past */
	.toc-past-active {
		color: rgba(0, 0, 0, 0.45) !important;
	}
</style>
