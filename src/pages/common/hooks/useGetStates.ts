import { useQuery } from "@tanstack/react-query";
import { ServiceLocation } from "../service/service";

export function useGetStates() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-states"],
    queryFn: () => ServiceLocation.getStates(),
  });

  const errorMessage = isError
    ? error instanceof Error
      ? error.message
      : "Erro ao buscar estados"
    : "";

    console.log({data})
  return {
    data: data ?? [],
    isLoading,
    isError,
    errorMessage
  };
}
