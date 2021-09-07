<script lang="ts">
	import Sidebar from "./Sidebar.svelte";
	import { fade, fly } from "svelte/transition";
	import { openOffCanvas } from "$lib/stores/openOffcanvas";

	const slideDuration = 300;
</script>

{#if $openOffCanvas}
	<div class="off-canvas" transition:fly={{ duration: slideDuration, opacity: 1, x: -300 }}>
		<Sidebar
			on:closeOffcanvas={() => {
				openOffCanvas.set(false);
			}} />
	</div>

	<div
		class="fade-bg"
		on:click={() => openOffCanvas.set(false)}
		transition:fade={{ duration: slideDuration }} />
{/if}

<style>
	.off-canvas {
		position: fixed;
		background-color: rgb(250, 250, 250);
		padding: 2rem 1rem;
		top: 0;
		bottom: 0;
		width: 18rem;
		z-index: 3;
	}

	.fade-bg {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.65);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2;
	}
</style>
