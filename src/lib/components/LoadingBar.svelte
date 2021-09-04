<script>
	import { navigating } from '$app/stores';

	let visible = false;

	navigating.subscribe((nav) => {
		visible = true ? nav != null : false;
	});

	function loadIn(node, { duration = 1500 }) {
		const style = getComputedStyle(node);
		const width = parseFloat(style.width);

		return {
			duration,
			css: (t) => `width: ${t * width}px;`
		};
	}

	function fade(node, { delay = 0, duration = 400 }) {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;

		return {
			delay,
			duration,
			css: (t) => `opacity: ${t * opacity};` + `width: 100%`
		};
	}
</script>

{#if visible}
	<div class="loading-bar" in:loadIn out:fade={{ duration: 250 }} />
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
