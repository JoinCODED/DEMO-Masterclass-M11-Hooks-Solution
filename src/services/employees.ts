import { EmployeeMutation, EmployeeQuery } from "../models";

export const useGetEmployees = (page: number = 1): EmployeeQuery => {
  return {
    data: undefined,
    error: undefined,
    loading: true,
  } as EmployeeQuery;
};

export const useCreateEmployee = (): EmployeeMutation => {
  return [
    (data) => {},
    {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      ipAddress: "",
    },
  ];
};
