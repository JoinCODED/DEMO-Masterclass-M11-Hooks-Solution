export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export type EmployeeQuery =
  | {
      data: Employee[];
      loading: false;
      error?: any;
    }
  | {
      data: undefined;
      loading: true;
      error: undefined;
    };

export type EmployeeMutation = [
  (data: Employee) => void,
  { data: Employee | undefined; loading: boolean; error: any }
];
