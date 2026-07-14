import { useQuery } from "@tanstack/react-query";
import { service } from "../service/getPetsService";

export function useGetPetsService() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["get-pets-list"],
    queryFn: () => service.getPets(),
  });

  return {
    pets: data ?? [],
    isLoading,
    error,
    isError
  };
}
