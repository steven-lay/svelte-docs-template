<script>
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
</script>

<div class="dropdown">
	<button class="dropbtn">Dropdown &#9662;</button>
	<div class="dropdown-content">
		<a href="/">Link 1</a>
		<a href="/">Link 2</a>
		<a href="/">Link 3</a>
	</div>
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
		display: none;
		margin-top: 0.1rem;
		min-width: 160px;
		background-color: rgb(253, 253, 253);
		border: 1px solid rgb(200, 200, 200);
		border-radius: 0.25rem;
	}

	.dropdown-content a {
		display: block;
		padding: 0.5rem 1rem;
		text-decoration: none;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.75);
	}

	.dropdown-content a:hover {
		color: rgba(79, 70, 229, 1);
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
