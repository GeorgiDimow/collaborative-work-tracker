export function calculateDaysBetweenTwoDates(dateFrom, dateTo) {
  if (!dateFrom || !dateTo) {
    console.error('Invalid date format');
    return null;
  }

  const timeDifference = Math.abs(dateFrom.getTime() - dateTo.getTime());
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}