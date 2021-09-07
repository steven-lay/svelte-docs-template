<script type="ts">
	import config from "$lib/userconfig.config";
	import { fly } from "svelte/transition";

	const pageTransitions = config.pageTransitions.enabled ?? true;
	const inDuration = config.pageTransitions.inDuration ?? 500;
	const outDuration = config.pageTransitions.outDuration ?? 300;
	const flyY = 15;
</script>

{#if pageTransitions}
	<div
		in:fly={{ duration: inDuration, delay: outDuration, y: flyY }}
		out:fly={{ duration: outDuration, y: flyY }}
		on:outroend={() => window.scroll({ top: 0, left: 0 })}>
		<slot />
	</div>
{:else}
	<slot />
{/if}
