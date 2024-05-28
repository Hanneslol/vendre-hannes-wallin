import { IEmployeeResponse } from "../models/IEmployeeResponse";
import { getApi } from "./services";

const url = "https://reqres.in/api/users";

export const getEmployees = async (page:number): Promise<IEmployeeResponse> => {
  const data = await getApi<IEmployeeResponse>(`${url}?page=${page}&per_page=3`);
  return data;
};

