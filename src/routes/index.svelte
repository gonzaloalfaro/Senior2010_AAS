<style>
	@import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');

	section{
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		min-height: 100vh;
		background: url('angloimage3.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.content{
		padding: 50px;
		font-family: 'Merienda One', cursive;
		color: #fff;
		text-shadow: 0 5px 15px rgba(0, 0, 0, 0.9)

	}

	.content h2{
		font-size: 5em;
		margin-bottom: 10px
	}
	.content p{
		font-size: 3em;

	}

	@media (max-width: 991px){
		
		section{
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		min-height: 100vh;
		background: url('angloimage3.jpg');
		background-size: 290%;
		background-position: center;
		background-repeat: no-repeat;
	}
		.content{
			padding: 15px;
			font-family: 'Merienda One', cursive;
			color: #fff;
			text-shadow: 0 5px 15px rgba(0, 0, 0, 0.9)
		}
		.content h2{
			font-size: 3.5em
		}
		.content p{
			font-size: 2.2em
		}
	}
</style>

<svelte:head>
	<title>Senior 2010 AAS</title>
	<meta name="description" content="Senior 2010 AAS" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@senior2010aas" />
	<meta name="twitter:creator" content="@gonzalfarof" />
	<meta name="twitter:title" content="Senior 2010 AAS" />
	<meta name="twitter:descripcion" content="Web del Senior 2010 del AAS" />
	<meta
    name="twitter:image"
    content="https://aas-senior2010.s3.amazonaws.com/profiles/80aniv.jpg" />

  <meta name="og:title" content="Senior 2010 AAS" />
  <meta name="og:description" content="Web del Senior 2010 del AAS" />
  <meta
    name="og:image"
    content="https://aas-senior2010.s3.amazonaws.com/profiles/80aniv.jpg" />
  <meta name="og:url" content="https://senior2010-aas.now.sh" />
  <meta name="og:site_name" content="Senior 2010 AAS" />
  <meta name="og:locale" content="es_ES" />
  <meta name="og:type" content="article" />
  <meta name="fb:app_id" content="" />
</svelte:head>

<section>
	<div class="content">
		<h2>Felicidades AAS</h2>
		<p>por tu 80 Aniversario<br>🇺🇸🇬🇧</p>
	</div>
</section>