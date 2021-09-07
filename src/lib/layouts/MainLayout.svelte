<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Offcanvas from "$lib/components/Offcanvas.svelte";
	import config from "$lib/userconfig.config";
	import { prefetchRoutes } from "$app/navigation";
	import { browser } from "$app/env";
	import { hideSidenav } from "$lib/stores/hideSidenav";

	const hideLoadbar = config.hideLoadbar ?? false;
	const preloadRoutes = config.preloadRoutes ?? false;

	if (preloadRoutes && browser) {
		prefetchRoutes();
	}
</script>

{#if !hideLoadbar}
	{#await import("$lib/components/LoadingBar.svelte") then LoadingBar}
		<svelte:component this={LoadingBar.default} />
	{/await}
{/if}

<Navbar />
<Offcanvas />

<div class="screen-layout">
	{#if !$hideSidenav}
		<aside class="aside-sidebar">
			<Sidebar />
		</aside>
	{/if}
	<!-- Markdown layout and Table of Contents -->
	<main class="main-layout">
		<slot />
	</main>
</div>

<style>
	@import "$lib/styles/modern-normalize.css";
	@import "$lib/styles/global.css";

	.main-layout {
		width: 80%;
		flex: auto;
	}

	.aside-sidebar {
		position: sticky;
		align-self: flex-start;
		top: 5.5rem;
		margin-right: 1rem;
		width: 20%;
		height: 85vh;
		overflow-y: auto;
	}

	.screen-layout {
		display: flex;
		max-width: 88rem;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 2rem;
		transition: filter 0.25s;
	}

	@media screen and (max-width: 992px) {
		.aside-sidebar {
			display: none;
		}

		.screen-layout {
			padding-top: 1.5rem;
		}
	}

	aside::-webkit-scrollbar {
		width: 0.5rem;
	}

	aside::-webkit-scrollbar-track {
		background-color: argb(255, 255, 255, 1);
	}

	aside::-webkit-scrollbar-thumb {
		background-color: darkgrey;
		border: 1px solid lightgray;
		border-radius: 1rem;
	}
</style>
