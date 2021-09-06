<script>
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import TransitionWrapper from '$lib/components/TransitionWrapper.svelte';
	import MarkdownFooter from '$lib/components/MarkdownFooter.svelte';
	import config from '$lib/userconfig.config';
	import { hideSidenav } from '$lib/stores/hideSidenav';

	/* Frontmatter variables */
	export let title;
	export let hide_toc;
	export let hide_sidenav = false;

	const hideTOC = hide_toc ?? config.hideTOC ?? false;
	const siteTitle = config.title ?? 'My Docs Si1te';
	let pageTitle = siteTitle;
	let headingsList;

	if (hide_toc) {
		hideSidenav.set(hide_sidenav);
	}

	function getHeadings(node) {
		const depth = config.TOCdepth ?? 2;

		let selectHeadings = 'h2';

		for (let i = 1; i < depth; i++) {
			selectHeadings += `,h${i + 2}`;
		}

		const markdownTitle = node.querySelector('h1');

		headingsList = node.querySelectorAll(selectHeadings);
		pageTitle = (title ?? markdownTitle?.textContent) + ' - ' + siteTitle;
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<TransitionWrapper>
	<div class="flex-wrap">
		<article use:getHeadings class="markdown">
			<slot />
			<MarkdownFooter />
		</article>
		{#if !hideTOC}
			<div class="toc">
				<TableOfContents {headingsList} />
			</div>
		{/if}
	</div>
</TransitionWrapper>

<style>
	@import '$lib/styles/admonition-classic.css';
	@import '$lib/styles/prism.css';

	.flex-wrap {
		display: flex;
	}

	.markdown {
		flex: auto;
		width: 75%;
		padding: 0 2rem;
	}

	.toc {
		position: sticky;
		top: 5.5rem;
		align-self: flex-start;
		width: 25%;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	@media screen and (max-width: 992px) {
		.markdown {
			padding-left: 0;
			padding-right: 0;
		}

		.toc {
			display: none;
		}
	}

	.markdown :global(strong) {
		font-weight: 500;
	}

	.markdown :global(blockquote) {
		background-color: rgba(0, 0, 0, 0.02);
		margin-left: 0;
		margin-top: 1rem;
		margin-bottom: 1rem;
		padding: 0.1rem 0.5rem 0.1rem 1rem;
		border-left: 3px solid rgb(206, 206, 206);
		width: 100%;
	}

	.markdown :global(p) {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}

	.markdown :global(h1) {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 2.5rem;
		color: rgb(49, 46, 129);
	}

	.markdown :global(h2) {
		scroll-margin-top: 4.5rem;
		color: rgb(55, 48, 163);
		font-size: 2rem;
		font-weight: 500;
		padding-top: 1rem;
		padding-bottom: 0.5rem;
		margin-bottom: 0;
		border-bottom: solid 1px rgb(233, 236, 239);
	}

	.markdown :global(h3) {
		color: rgb(55, 48, 163);
		font-size: 1.75rem;
		scroll-margin-top: 4.5rem;
		padding-top: 0.75rem;
		font-weight: 500;
		margin-bottom: 0;
	}

	.markdown :global(h4) {
		scroll-margin-top: 4.5rem;
		color: rgb(55, 48, 163);
		font-size: 1.5rem;
		font-weight: 500;
	}

	.markdown :global(hr) {
		border-top: 1px solid rgb(225, 225, 225);
	}

	.markdown :global(li) {
		font-size: 1.125rem;
	}

	.markdown :global(table) {
		border-collapse: collapse;
		table-layout: fixed;
		width: 100%;
		border: 1px solid #e7ddee;
	}

	.markdown :global(td) {
		padding: 0.75rem;
		font-size: 1.125rem;
		border: 1px solid #e7ddee;
	}

	.markdown :global(th) {
		color: rgb(49, 46, 129);
		background-color: rgb(198, 201, 231);
		text-align: left;
		font-size: 1.125rem;
		padding: 0.75rem;
	}

	.markdown :global(caption) {
		margin-bottom: 0.125rem;
	}

	.markdown :global(a) {
		color: rgb(89, 83, 190);
		font-weight: 500;
		text-decoration: none;
	}

	.markdown :global(li:not(:last-child)) {
		margin-bottom: 0.75rem;
		margin-top: 0.75rem;
	}

	.markdown :global(code:not([class])) {
		background-color: rgba(0, 0, 0, 0.05);
		color: rgba(0, 0, 0, 0.8);
		padding: 0.05rem;
		font-size: 0.85rem;
	}

	.markdown :global(a:hover) {
		text-decoration: underline;
	}

	.markdown :global(img) {
		max-width: 100%;
		height: auto;
	}
</style>
