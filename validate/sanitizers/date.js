import moment from 'moment';

export default function sanitizeDate(value, format = 'YYYY-MM-DD') {
  const parsed = moment(value, format, true);

  if (parsed.isValid()) {
    return parsed.format('YYYY-MM-DD');
  }

  return null;
}
