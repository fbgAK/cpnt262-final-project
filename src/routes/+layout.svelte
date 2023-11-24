<!-- +layout.svelte -->

<!-- Styling for the navigation bar -->
<style>
    nav {
        display: flex;
        justify-content: center;
        background-color: #f9e4b7;
        padding: 10px 0;
    }

    nav a {
        text-decoration: none;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: #d85f2a;
        font-weight: bold;
        padding: 0 20px;
        font-size: 18px;
        transition: color 0.3s;
    }

    nav a:hover {
        color: rgb(248, 106, 227);
    }

    /* Styling for the footer */
    footer {
        text-align: center;
        background-color: #f9e4b7;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    footer p {
        color: #d82424;
        font-style: italic;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size: 14px;
    }
</style>

<!-- Navigation bar -->
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/settings">Settings</a>
</nav>

<!-- Placeholder for the main content -->
<slot></slot>

<!-- Footer section -->
<footer>
    <p>&copy; Easy Dinner Ideas - Akash & Sterling </p>
</footer>