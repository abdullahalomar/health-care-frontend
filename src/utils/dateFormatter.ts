export const dateFormatter = (value: string) => {
  // Create a new Date object
  const initialDate = new Date(value);

  // Format the date to YYYY-MM-DD
  const formattedDate =
    initialDate.getFullYear() +
    "-" +
    ("0" + (initialDate.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + initialDate.getDate()).slice(-2);

  return formattedDate;
};
