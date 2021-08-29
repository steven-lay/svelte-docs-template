<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main class="main-content">
	<slot />
</main>

<style>
	@import 'modern-normalize/modern-normalize.css';

	:global(h1, h2, h3, h4, h5, h6) {
		margin-top: 0;
	}

	.main-content {
		max-width: 88rem;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
</style>
