import { useState } from "react";
import { Link } from "react-router-dom";

import { useGetEmployees } from "../../services";
import Employee from "../Employee";
import "./style.scss";

const EmployeeList = () => {
  const [page, setPage] = useState(1);
  const employeeQuery = useGetEmployees(page);

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
      <button>
        <Link to="add">Add employee</Link>
      </button>
      <article>
        <h1>Employees</h1>
        <section>{employees}</section>
      </article>
    </main>
  );
};

export default EmployeeList;
