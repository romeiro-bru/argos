import { useEffect, useState } from "react";
import { ServiceLocation } from "../../common/service/service";
import type { StatesResponse } from "../../registration/types";


export function useGetStates() {
  const [states, setStates] = useState<StatesResponse[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError("");
    
    ServiceLocation.getStates()
      .then(setStates)
      .catch((err: unknown) => {
        const message =
          err instanceof Error
            ? err.message
            : String(err ?? "Erro ao buscar estados");
        setError(message);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    states,
    error,
    loading,
  };
}
