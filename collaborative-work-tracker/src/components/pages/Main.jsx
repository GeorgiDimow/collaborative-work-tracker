import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { formatDataToMap } from "../../utils/dataParsingUtils";
import { dataContext } from "../../context/useDataContext";
import { LongestCollabWork } from "./LongestCollabWork";

function Main() {
  const [errors, setErrors] = useState([]);
  const data = useContext(dataContext);

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
      const dataMatrix = formatDataToMap(reader.result);

      if(!isNaN(dataMatrix[0])) {
        setErrors(dataMatrix);
        return;
      }

      data.setData(dataMatrix);

    }
  }

  return (
    <>
      <input type="file" onChange={handleFileChange}></input>
      {errors.length ? <p>Invalid data on row: {errors.join(', ')}</p> : null}
      <LongestCollabWork />
      <Outlet />
    </>
  );
}

export default Main;