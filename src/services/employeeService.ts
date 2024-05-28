import { IEmployee } from "../models/IEmployee";
import { IEmployeeResponse } from "../models/IEmployeeResponse";
import { getApi } from "./services";

const url = "https://reqres.in/api/users";

export const getEmployees = async (page:number): Promise<IEmployee[]> => {
  const data = await getApi<IEmployeeResponse>(`${url}?page=${page}`);
  return data.data;
};

