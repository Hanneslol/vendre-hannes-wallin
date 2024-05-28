import { IEmplyee } from "../models/IEmplyee";
import { IEmplyeeResponse } from "../models/IEmplyeeResoibe";
import { getApi } from "./services";


const url =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

export const getEmplyees = async (): Promise<IEmplyee[]> => {
  const data = await getApi<IEmplyeeResponse>(url);

  return data.drinks;
};