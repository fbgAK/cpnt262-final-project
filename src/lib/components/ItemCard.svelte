<!-- src/components/ItemCard.svelte -->

<script>
  export let title;
  export let detailed_description;
  export let altImg;
  export let largeImgURL;
</script>

  <div class="card">
    <h1>{title}</h1>
    <p>{detailed_description}</p>
    <img src={largeImgURL} alt={altImg}>
  </div>


<style>
  h1{
    color:blue;
  }
</style>


