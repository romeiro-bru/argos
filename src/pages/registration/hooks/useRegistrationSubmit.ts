import { useState } from "react";
import type { FormState } from "../types";
import { service } from "../service/newPetService";
import { useNewPetService } from "./useNewPetService";

interface HandleSubmitParams {
  e: React.FormEvent<HTMLFormElement>;
  formState: FormState;
  validateForm: () => boolean;
}

export function useRegistrationSubmit({ userId }: { userId: string }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate, isPending, error } = useNewPetService();

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

    const imageUrl = await service.uploadPetImage(formState.image);

    const { image, ...fields } = formState;

    // monta payload com url retornada(string), excluindo image (file)
    const payload = {
      ...fields,
      imageUrl,
      user_id: userId,
    };
    mutate({ pet: payload });

    if (error) {
      setShowSuccess(false);
      setShowError(true);
      setErrorMessage(error.message);
      return;
    }

    setShowError(false);
    setErrorMessage("");
    setShowSuccess(true);
  };

  return {
    handleSubmit,
    isPending,
    showSuccess,
    setShowSuccess,
    showError,
    setShowError,
    errorMessage,
    setErrorMessage,
  };
}
