import styles from "./display-data.module.css";

export function DisplayProjectData({ projectData  }) {
  const { projectId, employees } = projectData;

  return (
    <div className={styles.container}>
      <h4>Project ID: {projectId}</h4>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <p>Employee ID: {employee.empID}</p>
            <p>Date From: {employee.projectData.dateFrom.toLocaleDateString()}</p>
            <p>Date To: {employee.projectData.dateTo.toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}