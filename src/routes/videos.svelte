<style>
    h1{
        color: #083358;
        text-align: center;
        padding: 20px 0 0 0;
    }
    p{
        color: #083358;
        text-align: center;
        padding-bottom: 20px;
    }
    .iframe-container{
        position: relative;
        width: 100%;
        padding-bottom: 56%;
        height: 0;
    }
    .iframe-container iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }
</style>

<svelte:head>
  <title>Videos Senior2010</title>
</svelte:head>

<div class="Videos">
  <h1>Videos del Senior 2010</h1>
  <p>Los mejores videos de nuestros años en el colegio</p>
</div>

<div class="iframe-container">
  <iframe 
    src="http://www.youtube.com/embed/W7qWa52k-nE"
    width="560"
    height="315"
    frameborder="0"
    allowfullscreen />
</div>
