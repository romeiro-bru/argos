import { useEffect, useState } from "react";
import { ServiceLocation } from "../service/service";
import type { DistrictResponse } from "../types";

interface UseGetDistrictsProps {
  UF: string;
}

export function useGetDistricts({ UF }: UseGetDistrictsProps) {
  const [districts, setdistricts] = useState<DistrictResponse[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!UF) return;
    setLoading(true);

    ServiceLocation.getDistrict({ UF })
      .then(setdistricts)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [UF]);

  return {
    districts,
    error,
    loading,
  };
}
