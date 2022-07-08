import dateFormat from "dateformat";

export function formatDate(date, format) {
  // dateFormat uses Date.now if no date is given.
  if (!date) return null;

  return dateFormat(date, format);
}
