<script>
	import MdDehaze from 'svelte-icons/md/MdDehaze.svelte';
	import Dropdown from './Dropdown.svelte';
	import userconfig from '$lib/userconfig.config';
	import { openOffCanvas } from '$lib/stores/openOffcanvas';
</script>

<header class="header">
	<div class="nav-container">
		<div class="nav-button" on:click={() => openOffCanvas.set(true)}>
			<MdDehaze />
		</div>
		<div>
			<a class="nav-title" href="/">
				{userconfig.title}
			</a>
		</div>
		<nav class="nav-group">
			{#each userconfig.navbar as navitem}
				<a
					sveltekit:prefetch={navitem.link.startsWith('http') ? undefined : true}
					class="nav-link"
					target={navitem.link.startsWith('http') ? '_blank' : undefined}
					href={navitem.link}
				>
					{navitem.text}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		height: 3.5rem;
		background-color: white;
		border-bottom: 2px solid rgb(230, 230, 230);
		z-index: 1;
		padding: 1rem 0;
	}

	.nav-container {
		display: flex;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		max-width: 88rem;
		width: 100%;
		flex: 1;
		padding-left: 1.125rem;
		padding-right: 1rem;
	}

	.nav-button {
		margin-right: 2rem;
		width: 1.25rem;
		height: 1.25rem;
		cursor: pointer;
	}

	.nav-group {
		display: none;
	}

	@media only screen and (min-width: 992px) {
		.nav-button {
			display: none;
		}

		.nav-group {
			display: inline;
		}

		.nav-container {
			padding-left: 1.75rem;
		}
	}

	.nav-title {
		margin-right: 2rem;
		font-weight: 700;
		font-size: 1.125rem;
		text-decoration: none;
		color: rgb(49, 46, 129);
	}

	.nav-link {
		display: inline-block;
		padding: 0.125rem 0.75rem;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.75);
		text-decoration: none;
		transition: color 0.25s;
	}

	.nav-link:visited {
		color: black;
	}

	.nav-link:hover {
		color: rgba(79, 70, 229, 1);
	}
</style>
