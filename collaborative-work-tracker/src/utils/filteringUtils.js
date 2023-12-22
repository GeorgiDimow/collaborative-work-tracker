import { hadWorkedTogether } from "./validatingUtils";

export function findCommonProjectsBetweenTwoEmp(projects1, projects2) {
  const commonProjects = [];

  projects1.forEach((project1) => {
    projects2.forEach((project2) => {
      if (
        project1.projectID === project2.projectID &&
        hadWorkedTogether(
          project1.dateFrom,
          project1.dateTo,
          project2.dateFrom,
          project2.dateTo
        )
      ) {
        commonProjects.push({
          projectID: project1.projectID,
          dateFrom:
            project1.dateFrom > project2.dateFrom
              ? project1.dateFrom
              : project2.dateFrom,
          dateTo:
            project1.dateTo < project2.dateTo
              ? project1.dateTo
              : project2.dateTo,
        });
      }
    });
  });

  return commonProjects;
}
