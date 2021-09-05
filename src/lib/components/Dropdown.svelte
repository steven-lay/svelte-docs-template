<script lang="ts">
	import { fade } from 'svelte/transition';

	export let links = [];

	let showDrop = false;
</script>

<div
	class="dropdown"
	on:mouseleave={() => (showDrop = false)}
	on:mouseenter={() => (showDrop = true)}
>
	<button class="dropbtn">{links.name} &#9662;</button>
	{#if showDrop}
		<div class="dropdown-content" transition:fade={{ duration: 100 }}>
			{#each links as link}
				<a
					sveltekit:prefetch={link.link.startsWith('http') ? undefined : true}
					target={link.link.startsWith('http') ? '_blank' : undefined}
					href={link.link}>{link.name}</a
				>
			{/each}
		</div>
	{/if}
</div>

<style>
	.dropbtn {
		background-color: transparent;
		border: none;
		color: rgba(0, 0, 0, 0.75);
		font-weight: 500;
	}

	.dropdown {
		display: inline-block;
		padding: 0.125rem 0;
	}

	.dropbtn:hover {
		color: rgba(79, 70, 229, 1);
		cursor: pointer;
	}

	.dropdown-content {
		position: absolute;
		margin-top: 0.1rem;
		min-width: 8rem;
		background-color: white;
		border: 1px solid rgb(200, 200, 200);
		border-radius: 0.25rem;
		box-shadow: 0px 6px 10px -3px rgba(0, 0, 0, 0.1);
	}

	.dropdown-content a {
		display: block;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: rgba(0, 0, 0, 0.75);
	}

	.dropdown-content a:hover {
		color: rgba(79, 70, 229, 1);
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
