import { useQuery } from "react-query";
import { getTest } from "../api/test";

export const useGetTest = () => {
  const { data, isLoading } = useQuery("get_test", getTest);
  return { data, isLoading };
};
