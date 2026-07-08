import { useState } from "react";
import { newPetService, uploadPetImage } from "../service/newPetService";
import type { FormState } from "../types";

interface HandleSubmitParams {
  e: React.FormEvent<HTMLFormElement>;
  formState: FormState;
  validateForm: () => boolean;
}

export function useRegistrationSubmit({ userId }: { userId: string }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

    const imageUrl = await uploadPetImage(formState.image);

    const { image, ...fields } = formState;

    // monta payload com url retornada(string), excluindo image (file)
    const payload = {
      ...fields,
      imageUrl,
      user_id: userId,
    };

    const { error } = await newPetService({ pet: payload });

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
    showSuccess,
    setShowSuccess,
    showError,
    setShowError,
    errorMessage,
    setErrorMessage,
  };
}
