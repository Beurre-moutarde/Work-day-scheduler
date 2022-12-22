  // Get the current date and time
  var currentDate = new Date();
  var currentHour = currentDate.getHours();

  // Select all the time-block elements
  var timeBlocks = document.querySelectorAll(".time-block");

  // Loop through each time-block element
  timeBlocks.forEach(function(timeBlock) {
    // Extract the hour from the element's id
    var hour = timeBlock.id.split("-")[1];

    // Compare the extracted hour to the current hour
    if (hour < currentHour) {
      // If the hour is in the past, add the "past" class
      timeBlock.classList.add("past");
    } else if (hour > currentHour) {
      // If the hour is in the future, add the "future" class
      timeBlock.classList.add("future");
    } else {
      // If the hour is the current hour, add the "present" class
      timeBlock.classList.add("present");
    }

     // Listen for clicks on the save button
     $('.saveBtn').on('click', function() {
      // Get the text from the textarea and the hour for the event
      var text = $(this).siblings('.description').val();
      var hour = $(this).parent().attr('id').split('-')[1];
      // Save the event in local storage
      localStorage.setItem(hour, text);
    });
  
    // When the page loads, display the saved events
    $('.time-block').each(function() {
      var hour = $(this).attr('id').split('-')[1];
      var event = localStorage.getItem(hour);
      $(this).find('.description').val(event);
    });
  });
  
    // Get the current date
    var currentDate = new Date();

    // Get the current day, month, and year
    var day = currentDate.toDateString();
  
    // Get the element where you want to display the date
    var currentDayElement = document.getElementById("currentDay");
  
    // Set the text content of the element to the current date
    currentDayElement.textContent = day;