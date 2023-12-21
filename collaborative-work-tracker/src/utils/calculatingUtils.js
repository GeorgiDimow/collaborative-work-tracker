export function calculateDaysBetweenTwoDates(DateFrom, DateTo) {
  if (!DateFrom || !DateTo) {
    console.error('Invalid date format');
    return null;
  }

  const timeDifference = Math.abs(DateFrom.getTime() - DateTo.getTime());
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}