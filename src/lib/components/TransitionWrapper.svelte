<script type="ts">
	import { fly } from 'svelte/transition';

	export let inDuration = 750;
	export let outDuration = 250;

	const flyY = 15;
</script>

<div
	in:fly={{ duration: inDuration, delay: outDuration, y: flyY }}
	out:fly={{ duration: outDuration, y: flyY }}
>
	<slot />
</div>
