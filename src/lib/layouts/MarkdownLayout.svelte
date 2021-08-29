<script lang="ts">
	import { getHeadings } from '$lib/utils/getHeadings';
	import userconfig from '$lib/userconfig.config';

	export let title = '';

	const siteTitle = userconfig.title || 'My Docs Site';
	const pageTitle = title.length ? `${title} - ${siteTitle}` : siteTitle;
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<article use:getHeadings class="markdown">
	<slot />
</article>

<style>
	.markdown :global(p) {
		font-size: 1.05rem;
		color: rgba(0, 0, 0, 0.8);
		line-height: 1.75rem;
	}

	.markdown :global(h1) {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 2.25rem;
		color: rgb(49, 46, 129);
	}

	.markdown :global(h2) {
		scroll-margin-top: 4.5rem;
		color: rgb(55, 48, 163);
		font-size: 1.625rem;
		font-weight: 500;
		padding-top: 1rem;
		padding-bottom: 0.5rem;
		margin-bottom: 0;
		border-bottom: solid 1px rgba(233, 236, 239, 1);
	}

	.markdown :global(h3) {
		color: rgb(55, 48, 163);
		font-size: 1.375rem;
		scroll-margin-top: 4.5rem;
		padding-top: 0.75rem;
		font-weight: 500;
		margin-bottom: 0;
	}

	.markdown :global(h4) {
		scroll-margin-top: 4.5rem;
		color: rgb(55, 48, 163);
		font-size: 1.125rem;
		font-weight: 500;
	}

	.markdown :global(li) {
		font-size: 1.05rem;
		color: rgba(0, 0, 0, 0.8);
	}

	.markdown :global(strong) {
		font-weight: 500;
	}

	.markdown :global(li:not(:last-child)) {
		margin-bottom: 0.75rem;
	}

	.markdown :global(table) {
		border-collapse: collapse;
		table-layout: fixed;
		width: 100%;
		border: 1px solid #e7ddee;
	}

	.markdown :global(td) {
		padding: 0.75rem;
		border: 1px solid #e7ddee;
	}

	.markdown :global(th) {
		color: rgb(49, 46, 129);
		background-color: #e7ddee;
		text-align: left;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.875rem;
		padding-bottom: 0.875rem;
	}
</style>
