export function formatDataToMap(data) {
  const dataArr = splitStringToArray(data).filter((row) => row.trim().length !== 0)
  .map((row) => row.split(",").map((s) => s.trim()));

  const errors = [];
  const formattedData = dataArr.map((item, index) => {
    
    if (item.length !== 4) {
      errors.push(index + 1)
      return null;
    }

    return {
      empID: parseInt(item[0]),
      projectID: parseInt(item[1]),
      dateFrom: parseDate(item[2]),
      dateTo: item[3] === "NULL" ? new Date() : parseDate(item[3])
    };
  });
  
  if(errors.length) {
    return errors;
  }

  return formattedData;        
}


function splitStringToArray(data) {
  return data.split(/\r\n|\r|\n/g);
}

function parseDate(dateString) {

  const formats = [
    'YYYY-MM-DD',
    'DD/MM/YYYY',
    'YYYY-MM-DDTHH:mm:ss',
    'DD.MM.YYYY',
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
    .replace('YYYY', '(\\d{4})')
    .replace('MM', '(\\d{2})')
    .replace('DD', '(\\d{2})')
    .replace('THH', 'T(\\d{2})')
    .replace('mm', '(\\d{2})')
    .replace('ss', '(\\d{2})');

  const regex = new RegExp(`^${formatRegex}$`);

  const match = dateString.match(regex);

  if (match) {
    const [, year, month, day, hour, minute, second] = match;
    const parsedDate = new Date(year, month - 1, day || 1, hour || 0, minute || 0, second || 0);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
  }

  return null;
}

