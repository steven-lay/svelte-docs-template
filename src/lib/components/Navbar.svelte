<script>
	import MdDehaze from 'svelte-icons/md/MdDehaze.svelte';
	import userconfig from '$lib/userconfig.config';
</script>

<header class="header">
	<div class="nav-container">
		<div class="nav-button">
			<MdDehaze />
		</div>
		<div class="nav-title">
			{userconfig.title}
		</div>
		<nav class="nav-group">
			{#each userconfig.navbar as navitem}
				<a sveltekit:prefetch class="nav-link" href={navitem.link}>
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
		width: 100%;
		background-color: white;
		border-bottom: 2px solid rgb(230, 230, 230);
		z-index: 1;
	}

	.nav-container {
		display: flex;
		margin-left: auto;
		margin-right: auto;
		max-width: 88rem;
		align-items: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.nav-button {
		margin-right: 2rem;
		width: 1.25rem;
		height: 1.25rem;
		cursor: pointer;
	}

	.nav-title {
		margin-right: 2rem;
		font-weight: 700;
	}

	.nav-link {
		font-weight: 500;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		color: black;
		text-decoration: none;
		transition: color 0.5s;
	}

	.nav-link:visited {
		color: black;
	}

	.nav-link:hover {
		color: rgba(79, 70, 229, 1);
	}
</style>
