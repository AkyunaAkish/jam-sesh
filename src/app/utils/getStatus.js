import parseDateString from './parseDateString';
import moment from 'moment';

const getStatus = (dueDateString, returned) => {
  const dueDate = parseDateString(dueDateString);
  const now = moment();
  const daysUntilDueDate = dueDate.diff(now, 'days');

  if (daysUntilDueDate < 0) {
    if (returned === true) {
      return 'Returned';
    } else {
      return 'In Grading';
    }
  } else if (daysUntilDueDate === 0) {
    return 'Due Today';
  } else if (daysUntilDueDate === 1) {
    return 'Due Tomorrow';
  } else {
    return 'Assigned';
  }
};

export default getStatus;
