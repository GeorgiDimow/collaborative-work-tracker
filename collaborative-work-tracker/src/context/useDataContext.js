import { createContext, useState } from "react";

const dataContext = createContext();


function DataProvider({ children }) {
  const [data, setData] = useState([]);

  return (
      <dataContext.Provider value={{ data, setData }}>
        {children}
      </dataContext.Provider>
  );
}

export { DataProvider, dataContext};