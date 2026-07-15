import { useMutation } from "@tanstack/react-query";
import { service } from "../service/newPetService";

export function useNewPetService() {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["new-pet-mutation"],
    mutationFn: service.newPetService,
  });

  return {
    mutateAsync,
    isPending,
  };
}

export function useUploadImgService() {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["pet-upload-img"],
    mutationFn: service.uploadPetImage,
  });

  return {
    mutateAsync,
    isPending,
  };
}
