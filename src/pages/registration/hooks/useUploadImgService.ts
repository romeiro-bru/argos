import { useMutation } from "@tanstack/react-query";
import { service } from "../service/newPetService";

export function useUploadImgService() {
  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ["pet-upload-img"],
    mutationFn: service.uploadPetImage,
  });

  return {
    mutateAsync,
    isPending,
    error,
  };
}
