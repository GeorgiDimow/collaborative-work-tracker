import styles from "./display-data.module.css";

export function DisplayEmployeeData({ employeeData }) {
  const { employeeId, projects } = employeeData;

  return (
    <div className={styles.container}>
      <h4>Employee ID: {employeeId}</h4>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <p>Project ID: {project.projectID}</p>
            <p>Date From: {project.dateFrom.toLocaleDateString()}</p>
            <p>Date To: {project.dateTo.toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}