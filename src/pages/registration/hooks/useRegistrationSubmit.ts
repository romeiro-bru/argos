import { useState } from "react";
import type { FormState } from "../types";
import { useNewPetService } from "./useNewPetService";
import { useUploadImgService } from "./useUploadImgService";

interface HandleSubmitParams {
  e: React.FormEvent<HTMLFormElement>;
  formState: FormState;
  validateForm: () => boolean;
}

export function useRegistrationSubmit({ userId }: { userId: string }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    mutate: createPet,
    isPending: isCreatingPet,
    error: createPetError,
  } = useNewPetService();
  const { mutateAsync: uploadImg, isPending: isUploadingImg } = useUploadImgService();

  const handleSubmit = async ({
    e,
    formState,
    validateForm,
  }: HandleSubmitParams) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!formState.image) {
      return;
    }

    const imageUrl = await uploadImg(formState.image);

    const { image, ...fields } = formState;

    // monta payload com url retornada(string), excluindo image (file)
    const payload = {
      ...fields,
      imageUrl,
      user_id: userId,
    };
    createPet({ pet: payload });

    if (createPetError) {
      setShowSuccess(false);
      setShowError(true);
      setErrorMessage(createPetError.message);
      return;
    }

    setShowError(false);
    setErrorMessage("");
    setShowSuccess(true);
  };

  return {
    handleSubmit,
    isPending: isCreatingPet,
    isUploadingImg,
    showSuccess,
    setShowSuccess,
    showError,
    setShowError,
    errorMessage,
    setErrorMessage,
  };
}
