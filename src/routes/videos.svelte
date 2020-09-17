<script>
  import Youtube from '@sveltecasts/svelte-youtube';

  import Video1 from "../components/Video1.svelte"
</script>

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

    a{
      color: red
    }

    a:hover{
      color: #083358
    }

</style>

<svelte:head>
  <title>Videos Senior2010</title>
</svelte:head>

<div class="Videos">
  <h1>Más videos en canal de YouTube <br> del Senior 2010 &#9199</h1>
  <p><a href="https://www.youtube.com/channel/UCKbgzCVxk9s6X1W5ZwsTrNA/">YouTube Senior 2010 &#128721</a></p>
</div>

<Youtube  width="{426}" height="{240}" videoId="Yv0dwWtegdM" />
<!-- <Youtube  width="{426}" height="{240}" videoId="nRvAwgQKcfg" />
<Youtube  width="{426}" height="{240}" videoId="Zx_IH99vLJA" />
<Youtube  width="{426}" height="{240}" videoId="_2L4OXi0tzI" />
<Youtube  width="{426}" height="{240}" videoId="kGpOQM8rbGU" /> -->

<Video1 />