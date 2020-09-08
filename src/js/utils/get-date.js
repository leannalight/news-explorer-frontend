import { msOnDay } from '../constants/config.js';

function getDate() {
  const currentDate = new Date();
  const previousDateInMs = 6 * msOnDay;
  const previousDate = new Date(currentDate.getTime() - previousDateInMs);
  const fromDate = previousDate.toISOString().slice(0, 10);
  const toDate = currentDate.toISOString().slice(0, 10);
  return { fromDate, toDate };
}
export { getDate };
