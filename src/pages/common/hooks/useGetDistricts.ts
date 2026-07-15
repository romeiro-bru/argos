import { ServiceLocation } from "../../common/service/service";
import { useQuery } from "@tanstack/react-query";

interface UseGetDistrictsProps {
  UF: string;
}

export function useGetDistricts({ UF }: UseGetDistrictsProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-districts", UF],
    queryFn: () => ServiceLocation.getDistrict({ UF }),
  });

  const errorMessage = isError
    ? error instanceof Error
      ? error.message
      : "Erro ao buscar cidades"
    : "";

  return {
    data: data ?? [],
    isLoading,
    isError,
    error,
    errorMessage
  };
}
