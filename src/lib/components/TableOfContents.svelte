<script lang="ts">
	import { onMount } from "svelte";

	export let headingsList = [];

	let curAnchor = -1;

	let intersectOptions = {
		rootMargin: "15% 0px -85% 0px",
		threshold: 1.0,
	};

	function intersectCallback(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				curAnchor = entry.target.headIndex;
			}
		});
	}

	onMount(() => {
		let observer = new IntersectionObserver(intersectCallback, intersectOptions);

		headingsList.forEach((heading, index) => {
			heading.headIndex = index;
			observer.observe(heading);
		});

		return () => {
			observer.disconnect();
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
		font-weight: 600;
	}

	/* Dim the anchors that have been scrolled past */
	.toc-past-active {
		color: rgba(0, 0, 0, 0.45) !important;
	}
</style>
