import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { formatDataToMatrix } from "../../utils/dataParcingUtils";
import { dataContext } from "../../context/useDataContext";

function Main() {
  const [errors, setErrors] = useState([]);
  const data = useContext(dataContext);

  const handleFileChange =(event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader;
    const errorIndecies = [];

    reader.readAsText(file);

    reader.onload = function () {
      const dataMatrix = formatDataToMatrix(reader.result);

      dataMatrix.forEach((row, index) => {
        if (row.length !== 4) {
          errorIndecies.push(index + 1);
        }
      })

      setErrors(errorIndecies);
      if(!errorIndecies.length) {
        data.setData(dataMatrix);
      }
    }
  }

  return (
    <>
      <input type="file" onChange={handleFileChange}></input>
      {errors.length ? <p>Invalid data on row/s: {errors.join(', ')}</p> : null}
      <Outlet />
    </>
  );
}

export default Main;