<script lang="ts">
	import { navigating } from '$app/stores';

	let showLoadingBar = false;

	navigating.subscribe(async (nav) => {
		/* If navigating to a different page */
		if (nav?.from.path != nav?.to.path) {
			showLoadingBar = true;
		} else {
			showLoadingBar = false;
		}
	});

	function loadIn(node: Element, { duration = 1500 }) {
		const style = getComputedStyle(node);
		const width = parseFloat(style.width);

		return {
			duration,
			css: (t: number) => `width: ${t * width}px;`
		};
	}

	function loadOut(node: Element, { delay = 0, duration = 400 }) {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;

		return {
			delay,
			duration,
			css: (t: number) => `opacity: ${t * opacity};` + `width: 100%`
		};
	}
</script>

{#if showLoadingBar}
	<div class="loading-bar" in:loadIn out:loadOut={{ duration: 300 }} />
{/if}

<style>
	.loading-bar {
		top: 0;
		left: 0;
		width: 100%;
		z-index: 50;
		position: fixed;
		height: 2px;
		background-color: indigo;
	}
</style>
