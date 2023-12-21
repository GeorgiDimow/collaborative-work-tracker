export function hadWorkedTogether(
  emp1dateFrom,
  emp1dateTo,
  emp2dateFrom,
  emp2dateTo
) {
  if (
    emp1dateTo < emp2dateFrom ||
    emp2dateTo < emp1dateFrom ||
    emp1dateFrom > emp2dateTo ||
    emp2dateFrom > emp1dateTo
  ) {
    return false;
  }
  return true;
}
