import axios, { AxiosPromise } from "axios";
import { FoodData } from "../daat/foodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";
const FOOD_URL = API_URL + "/food";

const postData = async (data: FoodData): AxiosPromise<void> => {
  const response = axios.post(FOOD_URL, data);
  return response;
};

export function useFoodDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["food-data"] });
    },
  });

  return mutate;
}
