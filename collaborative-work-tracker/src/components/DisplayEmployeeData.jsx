export function DisplayEmployeeData({ employeeData }) {
  const { employeeId, projects } = employeeData;

  return (
    <div>
      <p>Employee ID: {employeeId}</p>

      <h3>Projects:</h3>
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