<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Offcanvas from '$lib/components/Offcanvas.svelte';
	import config from '$lib/userconfig.config';
	import { openOffCanvas } from '$lib/stores/openOffcanvas';
	import { prefetchRoutes } from '$app/navigation';
	import { browser } from '$app/env';

	if (config.preloadRoutes && browser) {
		prefetchRoutes();
	}
</script>

<Navbar />
<Offcanvas />

<div class="screen-layout" class:blur={$openOffCanvas}>
	<aside class="aside-sidebar">
		<Sidebar />
	</aside>
	<!-- Markdown layout and Table of Contents -->
	<div class="main-layout">
		<div>
			<slot />
		</div>
	</div>
</div>

<style>
	@import '$lib/styles/modern-normalize.css';
	@import '$lib/styles/global.css';

	.blur {
		filter: blur(6px);
	}

	.main-layout {
		display: flex;
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
