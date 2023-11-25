<script>
	import { DatePicker } from 'date-picker-svelte';
	import { DateInput } from 'date-picker-svelte';

	let selectedDateDatePicker = null; // Variable to store the selected date for DatePicker
	let selectedDateDateInput = null; // Variable to store the selected date for DateInput
</script>

<h1>Date Picker</h1>
<DatePicker bind:value={selectedDateDatePicker} />

{#if selectedDateDatePicker !== null}
  <p>Selected Date (DatePicker): {selectedDateDatePicker}</p>
{/if}

<h1>Date Input</h1>
<DateInput bind:value={selectedDateDateInput} />

{#if selectedDateDateInput !== null}
  <p>Selected Date (DateInput): {selectedDateDateInput}</p>
{/if}
