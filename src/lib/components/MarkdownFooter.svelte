<script>
	import { page } from '$app/stores';
	import config from '$lib/userconfig.config';

	let childLinks = [];
	let curPos = -1;

	for (let path of config.sidebar) {
		for (let child of path.children) {
			childLinks.push(child);
		}
	}
	curPos = childLinks.findIndex((mem) => $page.path == mem.link);
</script>

<hr />

<div class="flex-wrapper">
	<div class="footer-item-left">
		{#if curPos > 0}
			<div class="footer-page-text">Previous page</div>
			<div>
				<a sveltekit:noscroll href={childLinks[curPos - 1].link}>
					<span class="arrow-left">←</span><span class="arrow-text"
						>{childLinks[curPos - 1].text}</span
					>
				</a>
			</div>
		{/if}
	</div>
	<div class="footer-item-right">
		{#if curPos < childLinks.length - 1}
			<div class="footer-page-text">Next page</div>
			<div>
				<a sveltekit:noscroll href={childLinks[curPos + 1].link}>
					<span class="arrow-text">{childLinks[curPos + 1].text}</span><span class="arrow-right"
						>→</span
					>
				</a>
			</div>
		{/if}
	</div>
</div>

<style>
	.flex-wrapper {
		display: flex;
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}

	.footer-item-left {
		width: 50%;
	}

	.footer-item-right {
		width: 50%;
		text-align: right;
	}

	.arrow-left {
		margin-right: 0.5rem;
		font-size: 1.375rem;
		color: rgb(79, 70, 229);
	}

	.arrow-right {
		margin-left: 0.5rem;
		font-size: 1.375rem;
		color: rgb(79, 70, 229);
	}

	hr {
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: none !important;
	}

	.footer-page-text {
		font-weight: 500;
		color: rgba(0, 0, 0, 0.7);
		margin-bottom: 0.125rem;
	}

	.arrow-text {
		font-size: 1.125rem;
		font-weight: 500;
		color: rgb(79, 70, 229);
	}
</style>
