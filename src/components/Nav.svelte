<script>
	export let segment;
</script>

<style>
	.Nav {
		border-bottom: 1px solid #083358;
		font-weight: 300;
		background-color: #fff;
	}
	.Nav-container {
		display: grid;
		grid-template-columns: minmax(auto, 1024px);
		justify-content: center;
		align-items: center;
	}
	.Nav-content {
		display: flex;
		justify-content: center;
	}

	.Nav-list{
		display: flex;
		text-align: center;
		justify-content: center;
		align-content: center;
	}

	ul {
		margin: 0;
		padding: 10px 10px 0 10px;
	}

	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #FC3C3C;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 1em 1em 0;
		display: block;
		font-size: 14px;
		font-weight: 500;
		transition: all 0.2s ease-in-out 0s;
		color: #083358
	}

	a:hover{
		color: #FC3C3C
	}
</style>

<nav class="Nav">
	<div class="Nav-container">
		<div class="Nav-content">
			<div class="Nav-social">
				<ul class="Nav-list">
					<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Inicio</a></li>
					<li><a aria-current="{segment === 'gallery' ? 'page' : undefined}" href="gallery">Galeria de 	Fotos</a></li>
					<li><a aria-current="{segment === 'videos' ? 'page' : undefined}" href="videos">Videos</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
					<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Miembros y Amigos</a></li>
				</ul>
			</div>
		</div>
	</div>
	
</nav>
