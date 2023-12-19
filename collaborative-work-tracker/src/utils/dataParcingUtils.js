export function formatDataToMatrix(data) {
  const dataArr = splitStringToArray(data);
  
  return dataArr
        .filter((row) => row.trim().length !== 0)
        .map((row) => row.split(",").map((s) => s.trim()));
}

function splitStringToArray(data) {
  return data.split(/\r\n|\r|\n/g);
}