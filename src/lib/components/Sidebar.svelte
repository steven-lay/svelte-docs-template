<script>
	import config from '$lib/userconfig.config';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function closeOffcanvas() {
		dispatch('closeOffcanvas');
	}
</script>

<nav>
	{#each config.sidebar as sidebarEntry}
		<h4>{sidebarEntry.category}</h4>
		{#each sidebarEntry.children as child}
			<a
				sveltekit:prefetch={child.link.startsWith('http') ? undefined : true}
				class:active={$page.path == child.link}
				href={child.link}
				target={child.link.startsWith('http') ? '_blank' : undefined}
				on:click={() => closeOffcanvas()}
				sveltekit:noscroll
			>
				{child.text}
			</a>
		{/each}
		<div class="divider" />
	{/each}
</nav>

<style>
	.divider {
		padding-bottom: 1.5rem;
	}

	h4 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		padding-left: 0.75rem;
		font-size: 1.05rem;
		text-transform: uppercase;
		color: rgb(49, 46, 129);
	}

	a {
		display: block;
		padding-top: 0.5rem;
		padding-left: 0.75rem;
		padding-bottom: 0.5rem;
		margin-right: 3rem;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.8);
		text-decoration: none;
		transition: background-color 0.3s;
	}

	a:visited {
		color: rgb(55, 65, 81);
	}

	.active {
		background-color: rgb(224, 231, 255);
		border-radius: 0.3rem;
		color: rgb(79, 70, 229) !important;
	}
</style>
