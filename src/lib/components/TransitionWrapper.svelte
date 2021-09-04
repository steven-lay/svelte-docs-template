<script type="ts">
	import { fly } from 'svelte/transition';

	export let inDuration = 500;
	export let outDuration = 300;

	const flyY = 15;
</script>

<div
	in:fly={{ duration: inDuration, delay: outDuration + 50, y: flyY }}
	out:fly={{ duration: outDuration, y: flyY }}
	on:outroend={() => window.scroll({ top: 0, left: 0, behavior: 'auto' })}
>
	<slot />
</div>
