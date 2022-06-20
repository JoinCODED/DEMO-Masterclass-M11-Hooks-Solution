import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Employee, EmployeeMutation, EmployeeQuery } from "../models";
import { API } from "./instance";

type UseState<T> = Dispatch<SetStateAction<T>>;

const getEmployees = async (
  page: number,
  setEmployees: UseState<Employee[] | undefined>,
  setLoading: UseState<boolean>,
  setError: UseState<any>
): Promise<void> => {
  setLoading(true);
  try {
    const { data } = await API.get<Employee[]>("/employees", {
      params: { _page: page },
    });
    setEmployees(data);
  } catch (error) {
    setError(error);
  }
  setLoading(false);
};

export const useGetEmployees = (page: number = 1): EmployeeQuery => {
  const [employees, setEmployees] = useState<Employee[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    getEmployees(page, setEmployees, setLoading, setError);

    return () => {
      setError(undefined);
      setEmployees(undefined);
    };
  }, [page]);

  return {
    data: employees,
    error,
    loading,
  } as EmployeeQuery;
};

const createEmployee = async (
  data: Employee,
  setEmployee: UseState<Employee | undefined>,
  setLoading: UseState<boolean>,
  setError: UseState<any>
): Promise<void> => {
  setLoading(true);
  try {
    const res = await API.post<Employee>("/employees", data);
    setEmployee(res.data);
  } catch (error) {
    setError(error);
  }
  setLoading(false);
};

export const useCreateEmployee = (): EmployeeMutation => {
  const [employee, setEmployee] = useState<Employee>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  return [
    (data) => {
      createEmployee(data, setEmployee, setLoading, setError);
    },
    { data: employee, loading, error },
  ];
};
