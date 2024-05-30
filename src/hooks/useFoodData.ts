import axios, { AxiosPromise } from "axios";
import { FoodData } from "../daat/foodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";
const FOOD_URL = API_URL + "/food";

const fetchData = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(FOOD_URL);
  return response;
};

export function useFoodData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["food-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
