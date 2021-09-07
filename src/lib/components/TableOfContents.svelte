<script lang="ts">
	import { onMount } from "svelte";

	export let headingsList = [];

	let curAnchor = -1;

	onMount(() => {
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						let j = 0;
						/* find the heading that intersected and set that as active anchor */
						for (let heading of headingsList) {
							if (heading == entry.target) {
								curAnchor = j;
								break;
							}
							j++;
						}
					} else {
						/* if scrolling up, set anchor to previous heading */
						if (entry.boundingClientRect.y > 0) {
							curAnchor -= 1;
						}
					}
				});
			},
			/* rootMargin is 86% towards the top of the page */
			{ rootMargin: "0px 0px -86% 0px" }
		);

		/* observe all relevent headings */
		headingsList.forEach((heading) => {
			obs.observe(heading);
		});

		return () => {
			obs.disconnect();
		};
	});
</script>

{#if headingsList.length}
	<h4 class="select-none">ON THIS PAGE</h4>
	{#each headingsList as heading, i}
		<a
			class="toc-link select-none"
			class:toc-link-h2={heading.nodeName == "H2"}
			class:toc-link-h3={heading.nodeName == "H3"}
			class:toc-link-h4={heading.nodeName == "H4"}
			class:toc-active={curAnchor == i}
			class:toc-past-active={i < curAnchor}
			href="#{heading.id}">{heading.innerText}</a>
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
		font-weight: 500;
	}

	/* Dim the anchors that have been scrolled past */
	.toc-past-active {
		color: rgba(0, 0, 0, 0.45) !important;
	}
</style>
