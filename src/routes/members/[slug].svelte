<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`members/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>

.body{
	margin: 0;
	padding: 0;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	min-height: 100vh;
	background: linear-gradient(303deg, #ff0000, #083358, #ffffff);
    background-size: 600% 600%;

    -webkit-animation: RBWanimation 30s ease infinite;
    -moz-animation: RBWanimation 30s ease infinite;
    animation: RBWanimation 30s ease infinite;
}
.box{
	width: 1200px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350, 1fr));
	grid-gap: 15px;
	margin: 0 auto;
}
.card{
	position: relative;
	width: 500px;
	height: 580px;
	background: #fff;
	margin: 0 auto;
	box-shadow: 0 2px 10px rgba(255, 255, 255, 0.6)
}

.card .imgbox{
	position: absolute;
	top: 10px; 
	left: 10px;
	bottom: 10px;
	right: 10px;
	/* background: #222; */
}

.card .imgbox img{
	position: absolute;
	width: 100%;
	/* height: 100%; */
}

.card .details{
	position: absolute;
	text-align: center;
	left: 10px;
	right: 10px;
	bottom: 10px;
	height: 60px;
}

.card .details h2{
	
	margin: 0;
	padding: 0;
	font-weight: 600;
	font-size: 25px;
	color: #083358;
}
@media screen and (max-width: 800px){
	.card {
		position: relative;
		width: 440px;
		height: 540px;
	}
	.card .details h2{
		font-size: 18px
	}
}

@media screen and (max-width: 625px){
	.card {
		position: relative;
		width: 380px;
		height: 480px;
	}
	.card .details h2{
		font-size: 18px
	}
}

@media screen and (max-width: 425px){
	.card {
		position: relative;
		width: 300px;
		height: 400px;
	}
	.card .details h2{
		font-size: 18px
	}
}

@-webkit-keyframes RBWanimation {
    0%{background-position:0% 23%}
    50%{background-position:100% 78%}
    100%{background-position:0% 23%}
}
@-moz-keyframes RBWanimation {
    0%{background-position:0% 23%}
    50%{background-position:100% 78%}
    100%{background-position:0% 23%}
}
@keyframes RBWanimation {
    0%{background-position:0% 23%}
    50%{background-position:100% 78%}
    100%{background-position:0% 23%}
}

</style>

<svelte:head>
	<title>{post.name} </title>
</svelte:head>

<!-- <div class="member">
	<div class="member-name">
		<h1>{post.name}</h1>
	</div>
	<div class="member-image">
		<img src="{post.image}" alt="photo">
	</div>
	<div class="member-message">
	</div>
</div> -->

<div class="body">
<div class="box">
	<div class="card">
		<div class="imgbox">
			<img src="{post.image}" alt="photo">
		</div>
		<div class="details">
			<h2>{post.name}</h2>
			<span>{post.tag}</span>
		</div>
	</div>
</div>
</div>

