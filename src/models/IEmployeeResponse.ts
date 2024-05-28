import { IEmployee } from "./IEmployee";

export interface IEmployeeResponse {
  data: IEmployee[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
