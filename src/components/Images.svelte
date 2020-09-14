<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let books = [
    "https://www.incimages.com/uploaded_files/image/970x450/getty_883231284_200013331818843182490_335833.jpg",
    "https://www.incimages.com/uploaded_files/image/970x450/rey-seven-nm-mZ4Cs2I-unsplash_397351.jpg",
    "https://images2.minutemediacdn.com/image/upload/c_crop,h_2146,w_3819,x_0,y_200/f_auto,q_auto,w_1100/v1565275119/shape/mentalfloss/gettyimages-938171020.jpg"
  ];
  let activeIndex = 0;
  setInterval(() => {
    let next = activeIndex + 1;
    activeIndex = next == 3 ? 0 : next;
  }, 4000);
</script>

<style>
    section{
        display:flex;
        justify-content:center
    }
    section img{
        position: absolute;
        width: 90vw;
        height: 90vh;
        object-fit: cover
    }
</style>

<section>
  {#each books as book, i}
    {#if activeIndex === i}
      <img
        transition:fly={{ delay: 150, duration: 400, x: 0, y: 0, opacity: 0.3, easing: quintOut }}
        src={book}
        alt="image" />
    {/if}
  {/each}
</section>

<!-- in:fade={{ delay: 250, duration: 300 }} -->
<!-- transition:blur="{{amount: 10}}" -->
<!-- transition:fly={{ delay: 150, duration: 300, x: 50, y: 00, opacity: 0.3, easing: quintOut }} -->
<!-- transition:slide="{{delay: 250, duration: 300, easing: quintOut }}" -->
<!-- transition:scale="{{duration: 500, delay: 500, opacity: 0.5, start: 0.5, easing: quintOut}}" -->