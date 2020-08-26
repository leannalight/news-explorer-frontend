import { months } from '../constants/config.js';
import { findMonth } from './find-month.js';

function setNormalDate (data) {
  const date = new Date(data);
  const monthNumber = date.getMonth();
  return `${date.getDate()} ${findMonth(months, monthNumber)}, ${date.getFullYear()}`;
}

export { setNormalDate };
