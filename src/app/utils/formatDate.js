import parseDateString from './parseDateString';

const formatDate = (dateString) => {
  const parsedDate = parseDateString(dateString);

  // Extract the month and year directly from the parsed date
  const month = parsedDate.format('MMM');
  const year = parsedDate.format('YYYY');

  // Extract the day directly from the original date string
  const day = dateString.substring(8, 10);

  // Format the date as "month day year"
  const formattedDate = `${month} ${day} ${year}`;

  return formattedDate;
};

export default formatDate;
