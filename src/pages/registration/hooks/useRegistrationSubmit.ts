import { useState } from "react";
import { newPetService } from "../service/newPetService";
import type { FormState } from "../types";

interface HandleSubmitParams {
  e: React.FormEvent<HTMLFormElement>;
  formState: FormState;
  validateForm: () => boolean;
}

export function useRegistrationSubmit() {
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

    const { error } = await newPetService({ pet: formState });

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
