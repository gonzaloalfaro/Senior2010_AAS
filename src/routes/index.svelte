<style>

	@import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');

	section{
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		min-height: 100vh;
		background: url('anglophoto2020.3.jpg'), url('mask.jpg');
		background-blend-mode: screen;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.content{
		padding: 50px;
		font-family: 'Merienda One', cursive;
		color: darkblue;
		text-shadow: 0 5px 15px rgba(255, 255, 255, 1.2)

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
		background: url('anglophoto2020.3.jpg');
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
			font-size: 1.8em
		}
	}
</style>

<svelte:head>
	<title>Senior 2010 AAS</title>
</svelte:head>

<section>
	<div class="content">
		<h2>Felicidades AAS</h2>
		<p>en tu 80 aniversario <br> 🇺🇸🇬🇧</p>
	</div>
</section>