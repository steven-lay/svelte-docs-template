<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Offcanvas from "$lib/components/Offcanvas.svelte";
	import config from "$lib/userconfig.config";
	import { prefetchRoutes } from "$app/navigation";
	import { browser } from "$app/env";
	import { hideSidenav } from "$lib/stores/hideSidenav";

	const hideLoadbar = config.hideLoadbar ?? false;
	const prefetchAllRoutes = config.prefetchAllRoutes ?? true;

	if (prefetchAllRoutes && browser) {
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
		flex: auto;
		width: 80%;
	}

	.aside-sidebar {
		position: sticky;
		top: 5.5rem;
		align-self: flex-start;
		overflow-y: auto;
		width: 20%;
		height: 85vh;
		margin-right: 1rem;
	}

	.screen-layout {
		display: flex;
		transition: filter 0.25s;
		max-width: 88rem;
		margin: 0 auto;
		padding: 2rem 1rem 0 1rem;
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
