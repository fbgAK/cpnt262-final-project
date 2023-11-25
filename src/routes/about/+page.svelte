<script>

    // Listing variables
    export let name = "About Us";
    export let description = "We've got you covered!";
</script>

<div class="about-page">
    <!-- Heading for the about page -->
    <h1 class="page-title">{name}</h1>

    <!-- Description for the about page -->
    <p class="description">{description}</p>

    <!-- Welcome message -->
    <p class="welcome-message">
        🌟 Welcome to the ultimate dinner destination where we understand the significance of a memorable dinner! 🌟
    </p>

    <!-- About content paragraphs -->
    <p class="about-content">
        If your weeknights are often so busy you're exhausted even trying to plan dinner (much less get it on the table) let us help.
    </p>
    <p class="about-content">
        Instead of relying on unhealthy takeout or tasteless freezer meals, scan these easy family-friendly dinner ideas. With dozens of recipes in our list, you're sure to find something you can make. And these yummy, easy recipes are healthy, and picky-eater approved, as well! Try a few, and we're sure you'll come back for more.
    </p>
    <p class="about-content">
        These 30-minute dinners are just the thing when time is of the essence!
    </p>
</div>

<style>
    /* Styling for the about page container */
    .about-page {
        padding: 40px;
        margin: 20px;
        background-color: #f8f8f8df;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    /* Styling for the page title */
    .page-title {
        font-size: 2.5em;
        color: rgb(194, 106, 23);
        margin-bottom: 20px;
    }

    /* Styling for the description */
    .description {
        font-size: 1.2em;
        color: #333;
        margin-bottom: 30px;
    }

    /* Styling for the welcome message */
    .welcome-message {
        font-size: 1.3em;
        color: rgb(248, 106, 227);
        margin-bottom: 20px;
    }

    /* Styling for the about content paragraphs */
    .about-content {
        font-size: 1.1em;
        color: rgb(105, 88, 88);
        margin-bottom: 20px;
        line-height: 1.5;
    }
</style>
