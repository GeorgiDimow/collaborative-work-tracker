import { createContext, useState } from "react";
import { createProjectMap } from "../utils/dataParsingUtils";

const dataContext = createContext();

function DataProvider({ children }) {
  const [employeesData, setEmployeesData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);

  function setData(inputData) {
    setEmployeesData(inputData);
    setProjectsData(createProjectMap(inputData));
  }

  const data = {
    employeesData,
    projectsData,
    setData,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export { DataProvider, dataContext };
