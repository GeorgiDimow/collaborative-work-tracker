import { findCommonProjectsBetweenTwoEmp } from "./filteringUtils";


export function calculateLongestCollaboration(employeesMap) {
  let longestCollaboration = {
    empID1: null,
    empID2: null,
    daysWorked: 0,
    projects: null,
  };
  const traverseMap = new Map(employeesMap);

  for (const [empID1, projects1] of traverseMap) {
    for (const [empID2, projects2] of traverseMap) {
      if (empID1 !== empID2) {
        const commonProjects = findCommonProjectsBetweenTwoEmp(projects1, projects2);
        const totalDaysWorked = calculateTotalDaysWorkedBetweenTwoEmp(commonProjects);
        
        if (totalDaysWorked > longestCollaboration.daysWorked) {
          longestCollaboration = {
            empID1,
            empID2,
            daysWorked: totalDaysWorked,
            projects: commonProjects
          };
        }
      }
      traverseMap.delete(empID1);
    }
  }

  return longestCollaboration;
}


export function calculateDaysBetweenTwoDates(dateFrom, dateTo) {
  if (!dateFrom || !dateTo) {
    console.error('Invalid date format');
    return null;
  }

  const timeDifference = Math.abs(dateFrom.getTime() - dateTo.getTime());
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

function calculateTotalDaysWorkedBetweenTwoEmp(commonProjects) {
  return commonProjects.reduce((total, project) => {
    const daysWorked = calculateDaysBetweenTwoDates(
      project.dateFrom,
      project.dateTo
    );
    return total + daysWorked;
  }, 0);
}