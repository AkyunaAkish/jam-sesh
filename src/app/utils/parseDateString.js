import moment from 'moment';

const parseDateString = (dateString) => {
  return moment(dateString, 'YYYY-MM-DD');
};

export default parseDateString;
