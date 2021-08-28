<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	const slideDuration = 300;
</script>

<div class="offcanvas" transition:fly={{ duration: slideDuration, opacity: 1, x: -290 }}>Test</div>

<div class="fadebackground" transition:fade={{ duration: slideDuration }} />

<style>
	.offcanvas {
		position: fixed;
		background-color: lightgray;
		padding: 2rem;
		top: 0;
		bottom: 0;
		width: 18rem;
		z-index: 3;
	}

	.fadebackground {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.65);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2;
	}
</style>
