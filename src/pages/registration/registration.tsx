import { useNavigate } from "react-router-dom";
import { useUserSupabase } from "../../context/userSupabaseContext";
import { Form } from "./components/form";
import { UserNotAllowed } from "./components/userNotAllowed";
import { ErrorModal } from "../../components/modalError";
import { SuccessModal } from "../../components/modalSuccess";
import { appRoutes } from "../../routes";
import { useState } from "react";
import {
  useNewPetService,
  useUploadImgService,
} from "./hooks/useNewPetService";
import type { FormState } from "./types";

interface HandleSubmitParams {
  e: React.FormEvent<HTMLFormElement>;
  formState: FormState;
  validateForm: () => boolean;
}

export default function Registration() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { session } = useUserSupabase();

  const { mutateAsync: uploadImg, isPending: isUploadingImg } =
    useUploadImgService();
  const { mutateAsync: createPet, isPending: isCreatingPet } =
    useNewPetService();

  const registerPet = async (formState: FormState) => {
    const imageUrl = await uploadImg(formState.image!);

    const { image, ...fields } = formState;

    // monta payload com url retornada(string), excluindo image (file)
    return createPet({
      pet: {
        ...fields,
        imageUrl,
        user_id: session!.user.id ?? "",
      },
    });
  };
  const handleSubmit = async ({
    e,
    formState,
    validateForm,
  }: HandleSubmitParams) => {
    e.preventDefault();

    if (!validateForm()) return;
    if (!formState.image) return;

    try {
      await registerPet(formState);

      setShowSuccess(true);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Erro inesperado.");
      setShowError(true);
    }
  };

  const isLoadingRegister = isCreatingPet || isUploadingImg;

  if (!session) return <UserNotAllowed />;

  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>
      <Form onSubmit={handleSubmit} isPending={isLoadingRegister} />

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          navigate(appRoutes.ADOPTION.path);
        }}
        title="Pet cadastrado com sucesso!"
        message="Seu pet foi cadastrado com sucesso e já está disponível para adoção."
        actionLabel="Continuar"
        onAction={() => {
          setShowSuccess(false);
          navigate(appRoutes.ADOPTION.path);
        }}
      />

      <ErrorModal
        isOpen={showError}
        onClose={() => {
          setShowError(false);
          setErrorMessage("");
        }}
        title="Não foi possível finalizar o cadastro."
        message={
          errorMessage ||
          "Não foi possível finalizar o cadastro. Tente novamente."
        }
        actionLabel="Tentar novamente"
        onAction={() => {
          setShowError(false);
          setErrorMessage("");
        }}
      />
    </main>
  );
}
