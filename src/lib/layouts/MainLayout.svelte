<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
</script>

<Navbar />

<div class="screen-layout">
	<aside class="aside-sidebar">
		<Sidebar />
	</aside>
	<main class="main-layout">
		<!-- Markdown layout -->
		<div class="main-article">
			<slot />
		</div>
		<!-- Table of contents -->
		<div class="main-toc">
			<TableOfContents />
		</div>
	</main>
</div>

<style>
	@import 'modern-normalize/modern-normalize.css';

	:global(:root) {
		overflow-y: scroll;
		scroll-behavior: smooth;
	}

	.main-layout {
		display: flex;
		width: 80%;
		flex: auto;
	}

	.aside-sidebar {
		display: inline;
		position: sticky;
		align-self: flex-start;
		top: 5.5rem;
		width: 20%;
	}

	.main-article {
		width: 75%;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		min-height: 100vh;
		flex: auto;
	}

	.main-toc {
		width: 25%;
		display: inline;
		position: sticky;
		align-self: flex-start;
		top: 5.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	@media screen and (max-width: 992px) {
		.main-toc {
			display: none;
		}

		.aside-sidebar {
			display: none;
		}

		.main-article {
			padding-left: 0;
			padding-right: 0;
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
		padding-bottom: 1rem;
	}
</style>
