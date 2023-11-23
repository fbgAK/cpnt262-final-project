<script>
    import { cardsData } from '$lib/data.js';
    import Card from '$lib/components/Card.svelte'
</script>

<svelte:head>
  <title>Gallery List</title>
</svelte:head>


<main>
  <h1>Easy Dinner Ideas</h1>


  {#each cardsData as card (card.title)}
    {#if card.title && card.description && card.imgURL && card.altImg}
    <Card Id={card.Id} title={card.title} description={card.description} imgURL={card.imgURL} altImg={card.altImg} />
    {/if}
    {/each}
</main>

<style>
  h1 {
    color: rgb(194, 106, 23)
  }
</style>

