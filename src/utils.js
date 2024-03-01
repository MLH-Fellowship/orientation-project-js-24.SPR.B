export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
};
