import { useMutation } from "@tanstack/react-query";
import { service } from "../service/newPetService";

export function useNewPetService() {
  const { mutate, isPending, error } = useMutation({
    mutationKey: ["new-pet-mutation"],
    mutationFn: service.newPetService,
  });

  return {
    mutate,
    isPending,
    error
  };
}
