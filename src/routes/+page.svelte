<script>
    import { cardsData } from '$lib/data.js';
    import Card from '$lib/components/Card.svelte'

   <main>
   <h1>Types of Desserts</h1>
    {#each cardsData as card (card.title)}
    {#if card.title && card.description && card.imgURL && card.altImg && card.externalURL}
   <Card title={card.title} description={card.description} imgURL={card.imgURL} altImg={card.altImg} externalURL={card.externalURL}/>
    {/if}
    {/each}
   </main>
</script>
