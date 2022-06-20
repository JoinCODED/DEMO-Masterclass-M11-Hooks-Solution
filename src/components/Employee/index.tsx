import { Employee as EmployeeModel } from "../../models";

type EmployeeProps = {
  employee: EmployeeModel;
};

const Employee = ({ employee }: EmployeeProps) => {
  return (
    <div>
      <h2>
        {employee.firstName} {employee.lastName}
      </h2>
      <ul>
        <li>Email: {employee.email}</li>
        <li>IP Address: {employee.ipAddress}</li>
      </ul>
    </div>
  );
};

export default Employee;
