<script>
	import MdDehaze from "svelte-icons/md/MdDehaze.svelte";
	import Dropdown from "./Dropdown.svelte";
	import userconfig from "$lib/userconfig.config";
	import { openOffCanvas } from "$lib/stores/openOffcanvas";
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
					sveltekit:prefetch={navitem.link.startsWith("http") ? undefined : true}
					class="nav-link"
					target={navitem.link.startsWith("http") ? "_blank" : undefined}
					href={navitem.link}>
					{navitem.text}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.header {
		position: sticky;
		z-index: 1;
		top: 0;
		height: 3.5rem;
		border-bottom: 2px solid rgb(230, 230, 230);
		padding: 1rem 0;
		background-color: white;
	}

	.nav-container {
		display: flex;
		flex: 1;
		align-items: center;
		max-width: 88rem;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1.125rem;
		padding-right: 1rem;
	}

	.nav-button {
		height: 1.25rem;
		width: 1.25rem;
		margin-right: 2rem;
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
		text-decoration: none;
		font-weight: 700;
		font-size: var(--bodyFontSize);
		color: var(--primaryDark);
	}

	.nav-link {
		display: inline-block;
		transition: color 0.25s;
		font-weight: 600;
		padding: 0.125rem 0.75rem;
		text-decoration: none;
		color: rgba(0, 0, 0, 0.75);
	}

	.nav-link:visited {
		color: black;
	}

	.nav-link:hover {
		color: var(--primaryMedium);
	}
</style>
