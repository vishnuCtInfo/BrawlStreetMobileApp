
function calculateEndDateAndRemainingDays(startDate, durationDays) {
    // Convert the string start date to a JavaScript Date object
    const startDateObject = new Date(startDate);
  
    // Calculate the ending date by adding the duration in days to the start date
    const endDateObject = new Date(startDateObject);
    endDateObject.setDate(startDateObject.getDate() + durationDays);
  
    // Calculate the remaining days by subtracting the current date from the ending date
    const currentDate = new Date();
    const remainingDays = Math.ceil((endDateObject - currentDate) / (1000 * 60 * 60 * 24));
  
    // Format the dates as strings
    const endDateString = endDateObject.toDateString();
  
    return { endDateString, remainingDays };
  }

  export default calculateEndDateAndRemainingDays