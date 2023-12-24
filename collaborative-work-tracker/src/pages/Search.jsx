import React, { useState } from 'react';
import { useContext } from 'react';
import { dataContext } from '../context/useDataContext';
import styles from "./search.module.css"; 
import {DisplayEmployeeData } from "../components/DisplayEmployeeData";
import {DisplayProjectData  } from "../components/DisplayProjectData";

function Search() {
  const [searchOption, setSearchOption] = useState('employeeId');
  const [results, setResults] = useState([]);
  const [displayData, setDisplayData] = useState(false);
  const [displayResult, setdisplayResult] = useState([]);
  const [erorrMassage, setErrorMassage] = useState('');
  const data = useContext(dataContext);
  
  const handleOptionChange = (event) => {
    setDisplayData(false);
    setSearchOption(event.target.value);
  };

  
  const handleQueryChange = (event) => {
      event.preventDefault();

      const id = +event.target.value;

      if (isNaN(id) || id < 0) {
        setErrorMassage('The Id must be a number!')
        return;
      } else {
        setErrorMassage('');
      }

      switch (searchOption) {
        case 'employeeId':
          if (data.employeesData.has(id)){
            setResults({employeeId: id, projects: data.employeesData.get(id)});
          }
          break;
        case 'projectId':
          if (data.projectsData.has(id)) {
            setResults({ projectId: id, employees: data.projectsData.get(id) });
          }
          break;
      }
      
  };

  const handleSearch = (event) => {
    event.preventDefault();

    setDisplayData(true);
    setdisplayResult(results);
  };

  return (
    <div className={styles.container}>
      <h2>Search Page</h2>
      <form onSubmit={handleSearch}>
        <label>
          Search by:
          <select value={searchOption} onChange={handleOptionChange}>
            <option value="employeeId">Employee ID</option>
            <option value="projectId">Project ID</option>
          </select>
        </label>

        <label>
          Enter search query:
          <input
            type="text"
            placeholder={`Enter id`}
            onChange={handleQueryChange}
          />
        </label>
        {erorrMassage.length > 0 ? erorrMassage : null}
        <button type="submit">Search</button>
      </form>

      <div>
        <h3>Search Results</h3>
        {displayData ? <>{searchOption === "employeeId" ? <DisplayEmployeeData employeeData={displayResult} /> : <DisplayProjectData projectData={displayResult} />}</> : null}
      </div>
    </div>
  );
};

export default Search;