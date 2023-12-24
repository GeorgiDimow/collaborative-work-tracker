export function DisplayProjectData({ projectData  }) {
  const { projectId, employees } = projectData;

  return (
    <div>
      <p>Project ID: {projectId}</p>

      <h3>Employees:</h3>
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