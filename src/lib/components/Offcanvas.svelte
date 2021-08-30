<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { openOffCanvas } from '$lib/stores/openOffcanvas';

	const slideDuration = 300;
</script>

{#if $openOffCanvas}
	<div class="offcanvas" transition:fly={{ duration: slideDuration, opacity: 1, x: -300 }}>
		Test
	</div>

	<div
		class="fadebackground"
		on:click={() => openOffCanvas.set(false)}
		transition:fade={{ duration: slideDuration }}
	/>
{/if}

<style>
	.offcanvas {
		position: fixed;
		background-color: rgb(245, 245, 245);
		padding: 1.5rem;
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
