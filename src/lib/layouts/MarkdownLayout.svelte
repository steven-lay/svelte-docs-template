<script lang="ts">
	import TransitionWrapper from '$lib/components/TransitionWrapper.svelte';

	let headings = [];

	function getHeadings(node) {
		headings = node.querySelectorAll('h2, h3, h4');
	}
</script>

<TransitionWrapper>
	<div class="flex-wrapper">
		<div use:getHeadings class="markdown">
			<slot />
		</div>
		<div class="toc">TOC</div>
	</div>
</TransitionWrapper>

<style>
	.flex-wrapper {
		display: flex;
	}

	.markdown {
		width: 100%;
	}

	.toc {
		position: sticky;
		height: 0;
	}
</style>
