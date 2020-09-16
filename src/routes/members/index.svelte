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

	h1 {
		color: #083358;
        text-align: center;
        padding: 20px 0 0 0;
    }
	
	.grid {
		padding: 10px 10px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
		grid-auto-rows: 2fr;
		gap: 10px
	}

	.grid img{
		width: 100%;
		transition: transform 0.5s
	}

	.grid img:hover{
		filter: drop-shadow(5px 5px 7px #083358);
        transform: rotate(7deg) scale(1.2)
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

	.grid p{
		color: #083358;
		font-size: 14px;
	}
</style>

<svelte:head>
	<title>Miembros y Amigos del Senior 2010</title>
</svelte:head>

<h1>Integrantes y Amigos <br> del Senior 2010</h1>

<div class="grid">
	{#each posts as post}
		<div>
			<a rel='prefetch' href='members/{post.slug}'><img src="{post.image}" alt=""></a>
			<p>{post.name}</p>
		</div>
	{/each}
</div>