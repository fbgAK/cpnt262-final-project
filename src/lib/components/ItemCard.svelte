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
  h1 {
    color: rgb(75, 41, 9);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>


