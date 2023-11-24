<!-- src/components/Cards.svelte -->

<script>
  export let Id;
  export let title;
  export let description;
  export let detailed_description;
  export let imgURL;
  export let altImg;
  export let largeImgURL;
</script>

<a href={`/item/${Id}`}>
  <div class="card">
    <h1>{title}</h1>
    <p>{description}</p>
    {#if detailed_description}
      <p>{detailed_description}</p>
    {/if}
    <img class="card-image" src={imgURL} alt={altImg}>
    {#if largeImgURL}
      <img class="card-image" src={largeImgURL} alt={altImg}>
    {/if}
  </div>
</a>

<style>
  .card {
    place-content: center;
    text-align: center;
    
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 16px;
    margin: 16px;
    width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    display: grid;
  }

  .card:hover {
    transform: scale(1.05);
    background-color: #f9e4b7;
    box-shadow: 3px 3px black;
  }

  .card-image {
    width: 100%; /* Set the width to 100% to ensure responsiveness */
    height: auto; /* Automatically adjust the height to maintain the aspect ratio */
    max-width: 300px; /* Set a maximum width to control the size */
    display: block; /* Ensure the image is treated as a block element */
    margin: 0 auto; /* Center the image within its container */
    border-radius: 10px;
  }
</style>
