<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Offcanvas from '$lib/components/Offcanvas.svelte';
	import config from '$lib/userconfig.config';
	import { openOffCanvas } from '$lib/stores/openOffcanvas';
	import { prefetchRoutes } from '$app/navigation';
	import { browser } from '$app/env';
	import { getStores } from '$app/stores';
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	const { navigating } = getStores();

	let visible = false;

	navigating.subscribe((nav) => {
		if (!browser) return;

		if (nav != null) {
			console.log('start nav');
			visible = true;
		} else {
			console.log('end nav');
			visible = false;
		}
	});

	if (config.preloadRoutes && browser) {
		prefetchRoutes();
	}

	function typewriter(node, { duration = 1000 }) {
		const style = getComputedStyle(node);
		const width = parseFloat(style.width);

		return {
			duration,
			quintOut,
			css: (t) => `width: ${t * width}px;`
		};
	}
</script>

<Navbar />
<Offcanvas />

{#if visible}
	<div class="loading-bar" in:typewriter out:fade />
{/if}

<div class="screen-layout" class:blur={$openOffCanvas}>
	<aside class="aside-sidebar">
		<button on:click={() => (visible = !visible)}>Test animation</button>
		<Sidebar />
	</aside>
	<!-- Markdown layout and Table of Contents -->
	<div class="main-layout">
		<slot />
	</div>
</div>

<style>
	@import '$lib/styles/modern-normalize.css';
	@import '$lib/styles/global.css';

	.loading-bar {
		top: 0;
		left: 0;
		width: 100%;
		z-index: 50;
		position: fixed;
		height: 2px;
		background-color: indigo;
	}

	.blur {
		filter: blur(6px);
	}

	.main-layout {
		width: 80%;
		flex: auto;
	}

	.aside-sidebar {
		position: sticky;
		align-self: flex-start;
		top: 5.5rem;
		width: 20%;
	}

	@media screen and (max-width: 992px) {
		.aside-sidebar {
			display: none;
		}
	}

	.screen-layout {
		display: flex;
		max-width: 88rem;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
		transition: filter 0.25s;
	}
</style>
