<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`members.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>

	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(6, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 10px;
	}
	li{
		background: gray		

	}
/* /// */
	.grid {
		padding: 10px 10px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
		grid-auto-rows: 2fr;
		gap: 10px
	}

	.grid img{
		width: 300px;
	}

	.grid::before {
		content: '';
		width: 0;
		padding-bottom: 100%;
		grid-row: 1 / 1;
		grid-column: 1 / 1;
}

.grid > *:first-child {
	grid-row: 1 / 1;
	grid-column: 1 / 1;
}

</style>

<svelte:head>
	<title>Miembros y Amigos Senior 2010</title>
</svelte:head>

<h1>Miembros y Amigos Senior 2010</h1>

<ul>
	<!-- {#each posts as post} -->
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<!-- <li><a rel='prefetch' href='members/{post.slug}'>{post.title}</a></li> -->
	<!-- {/each} -->
</ul>

<div class="grid">
	{#each posts as post}

	<div>
		<h3>{post.title}</h3>
		<li><a rel='prefetch' href='members/{post.slug}'><img src="{post.image}" alt="">
</a></li>

	</div>
	{/each}
</div>