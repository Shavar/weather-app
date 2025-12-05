import { daysOfWeek, monthsOfYear } from "../config/dates";

export const formatDates = (date: Date) => {
  return { dayOfWeek: daysOfWeek[date.getDay()], monthOfYear: monthsOfYear[date.getMonth()], dateOfMonth: date.getDate() };
};

export default formatDates;
