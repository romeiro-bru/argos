import { useEffect, useState } from "react";
import { ServiceLocation, type ApiResponse } from "../service/service";

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
