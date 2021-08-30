<script type="ts">
	import { fly } from 'svelte/transition';

	export let inDuration = 500;
	export let outDuration = 250;

	const flyY = 15;
</script>

<div
	in:fly={{ duration: inDuration, delay: outDuration + 50, y: flyY }}
	out:fly={{ duration: outDuration, y: flyY }}
>
	<slot />
</div>
