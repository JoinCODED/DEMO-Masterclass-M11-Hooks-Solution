import { Dispatch, SetStateAction } from "react";

import { Employee, EmployeeMutation, EmployeeQuery } from "../models";
import { API } from "./instance";

type UseState<T> = Dispatch<SetStateAction<T>>;

const getEmployees = async (
  page: number,
  setEmployees: UseState<Employee[] | undefined>,
  setError: UseState<any>
): Promise<void> => {};

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
