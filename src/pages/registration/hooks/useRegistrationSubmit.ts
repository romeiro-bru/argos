import { newPetService } from "../service/newPetService";
import type { useRegistrationForm } from "./useRegistrationForm";

interface HandleSubmitParams {
  e: React.FormEvent<HTMLFormElement>;
  formState: ReturnType<typeof useRegistrationForm>["formState"];
  validateForm: ReturnType<typeof useRegistrationForm>["validateForm"];
}

export const handleSubmit = async ({
  e,
  formState,
  validateForm,
}: HandleSubmitParams) => {
  e.preventDefault();
  console.log("submitted", formState);

  if (!validateForm()) return;

  const { data, error } = await newPetService({ pet: formState });

  if (error) {
    console.error("Erro ao cadastrar pet:", error);
    // TODO: Adicionar tratamento visual de erro (modal de erro)
    return;
  }

  // TODO: Adicionar feedback de sucesso ao usuário
};