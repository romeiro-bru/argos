import { useEffect, useState } from "react";
import { ServiceLocation } from "../service/service";
import type { ApiResponse } from "../types";

export function useGetStates() {
  const [states, setStates] = useState<ApiResponse[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ServiceLocation.getStates()
      .then(setStates)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    states,
    error,
    loading,
  };
}
