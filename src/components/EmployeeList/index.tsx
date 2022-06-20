import { useGetEmployees } from "../../services";
import Employee from "../Employee";
import "./style.scss";

const EmployeeList = () => {
  const employeeQuery = useGetEmployees();

  if (employeeQuery.loading) {
    return <h1>Loading...</h1>;
  }

  if (employeeQuery.error) {
    return (
      <main>
        <h1>Error</h1>
        <p>{JSON.stringify(employeeQuery.error)}</p>
      </main>
    );
  }

  const employees = employeeQuery.data.map((employee) => (
    <Employee key={employee.id} employee={employee} />
  ));

  return (
    <main>
      <article>
        <h1>Employees</h1>
        <section>{employees}</section>
      </article>
    </main>
  );
};

export default EmployeeList;
