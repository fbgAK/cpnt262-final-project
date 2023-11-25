<script>
  // control notifications for the site//
  let notifications = true;
</script>

<div class="settings-container">
  <h1>Settings</h1>

    <!-- Description for the notifs -->
  <p>Like what you see? Click below to be notified when we share more ideas! </p>
 
 <!-- Checkbox to enable the notifs-->
  <label>
    <input type="checkbox" bind:checked={notifications}/>
    Enable Notifications
  </label>
</div>
<style>
   /* Styling for the settings box */
  .settings-container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9e4b7;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

      /* Styling for the h1 */
  h1 {
    font-size: 2.5em;
      color: rgb(194, 106, 23);
      margin-bottom: 20px;
  }

    /* Styling for the label element */
  label { font-size: 1em; color: #333; display: flex; align-items: center; }

  input { margin-right: 7px; }
</style>


