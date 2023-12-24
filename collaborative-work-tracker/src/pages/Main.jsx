import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { formatDataToMap } from "../utils/dataParsingUtils";
import { dataContext } from "../context/useDataContext";
import { LongestCollabWork } from "../components/LongestCollabWork";
import styles from "./main.module.css"; 

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
      setErrors([]);
      data.setData(dataMatrix);

    }
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Collaborative Work Tracker</h1>
        <button>
          <label>
            <input type="file" onChange={handleFileChange} />
            Upload employees information
          </label>
        </button> 
        {errors.length ? <p>Invalid data on row: {errors.join(', ')}</p> : <LongestCollabWork />}
      </div>
      <Outlet />
    </>
  );
}

export default Main;