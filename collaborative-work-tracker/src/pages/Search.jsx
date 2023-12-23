import React, { useState } from 'react';
import styles from "./search.module.css"; 

const Search = () => {
  const [searchOption, setSearchOption] = useState('employeeId');
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredResults = results.filter(
      (result) =>
        result[searchOption].toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredResults);
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
            value={searchQuery}
            onChange={handleQueryChange}
          />
        </label>

        <button type="submit">Search</button>
      </form>

      <div>
        <h3>Search Results</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {`Employee ID: ${result.employeeId}, Project ID: ${result.projectId}, Name: ${result.name}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;