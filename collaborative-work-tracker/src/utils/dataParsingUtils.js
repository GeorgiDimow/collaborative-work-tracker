export function formatDataToMap(data) {
  const dataArr = splitStringToArray(data)
    .filter((row) => row.trim().length !== 0)
    .map((row) => row.split(",").map((s) => s.trim()));

  const errors = [];

  const parsedMap = new Map();

  dataArr.forEach((item, index) => {
    const empID = parseInt(item[0]);

    if (item.length !== 4 && (parseDate(item[3]) < parseDate(item[2]))) {
      errors.push(index + 1);
      return null;
    }
    
    const projectData = {
      projectID: parseInt(item[1]),
      dateFrom: parseDate(item[2]),
      dateTo: item[3] === "NULL" ? new Date() : parseDate(item[3]),
    };

    if (!parsedMap.has(empID)) {
      parsedMap.set(empID, [projectData]);
    } else {
      parsedMap.get(empID).push(projectData);
    }
  });

  if (errors.length) {
    return errors;
  }
  return parsedMap;
}

function splitStringToArray(data) {
  return data.split(/\r\n|\r|\n/g);
}

function parseDate(dateString) {
  const formats = [
    "YYYY-MM-DD",
    "MM/DD/YYYY",
    "DD/MM/YYYY",
    "YYYY-MM-DDTHH:mm:ss",
    "DD.MM.YYYY",
  ];

  for (let format of formats) {
    const parsedDate = tryParseDate(dateString, format);
    if (parsedDate) {
      return parsedDate;
    }
  }
  return null;
}

function tryParseDate(dateString, format) {
  const formatRegex = format
    .replace("YYYY", "(\\d{4})")
    .replace("MM", "(\\d{2})")
    .replace("DD", "(\\d{2})")
    .replace("THH", "T(\\d{2})")
    .replace("mm", "(\\d{2})")
    .replace("ss", "(\\d{2})");

  const regex = new RegExp(`^${formatRegex}$`);

  const match = dateString.match(regex);

  if (match) {
    let [year, month, day, hour, minute, second] = [0, 0, 0, 0, 0, 0];

    switch (format){
      case "YYYY-MM-DD":
        [, year, month, day, ] = match;
        
        break;
      case "MM/DD/YYYY":
        [, month, day, year, ] = match;
        break;
      case "DD/MM/YYYY":
        [, day, month, year, ] = match;
        break;
      case "YYYY-MM-DDTHH:mm:ss":
        [, year, month, day, hour, minute, second ] = match;
        break;
      case "DD.MM.YYYY":
        [, day, month, year, ] = match;
        break;
    }
    
    const parsedDate = new Date(
      year,
      month - 1,
      day || 1,
      hour || 0,
      minute || 0,
      second || 0
    );
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
  }

  return null;
}

export function createProjectMap(dataMap) {
  const projectMap = new Map();

  dataMap.forEach((projects, empID) => {
    projects.forEach((projectData) => {
      const projectID = projectData.projectID;

      if (!projectMap.has(projectID)) {
        projectMap.set(projectID, [{ empID, projectData }]);
      } else {
        projectMap.get(projectID).push({ empID, projectData });
      }
    });
  });

  return projectMap;
}
