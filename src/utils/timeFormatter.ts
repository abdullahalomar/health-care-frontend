const timeFormatter = (time: string) => {
  // Create a new Date object

  // Create a new Date object
  var initialDate = new Date(time);

  // Format the time to HH:MM
  var formattedTime = initialDate.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return formattedTime; // Output: 00:00 (assuming time is not specified in the initial date string)
};

export default timeFormatter;
