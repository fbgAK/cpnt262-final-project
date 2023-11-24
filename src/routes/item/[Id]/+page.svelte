<script>
    import ItemCard from '$lib/components/ItemCard.svelte'
    export let data;
    
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<h1>Dinner Option </h1>


{#if data.title}
<ItemCard title={data.title} detailed_description={data.detailed_description} largeImgURL={data.largeImgURL} altImg={data.altImg} />
{:else}
<!-- <p>ITEM NOT FOUND</p> -->
{/if}

<style>
  h1 {
    color: rgb(194, 106, 23);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  :global(img)  {
    width: 100vh;
  }
</style>