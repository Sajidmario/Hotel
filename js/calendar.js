$( function() {
    $( "#datepicker" ).datepicker({
      dateFormat: 'yy-mm-dd', // Format of the date
      minDate: 0, // Minimum selectable date (0 means today)
      maxDate: '+1M', // Maximum selectable date (e.g., +1M for one month from today)
      showButtonPanel: true // Show additional buttons like "Today" and "Done"
    });
  } );
  