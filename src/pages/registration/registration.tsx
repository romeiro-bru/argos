import { useNavigate } from "react-router-dom";
import { useUserSupabase } from "../../context/userSupabaseContext";
import { Form } from "./components/form";
import { UserNotAllowed } from "./components/userNotAllowed";
import { ErrorModal } from "../../components/modalError";
import { SuccessModal } from "../../components/modalSuccess";
import { useRegistrationSubmit } from "./hooks/useRegistrationSubmit";
import { appRoutes } from "../../routes";

export default function Registration() {
  const navigate = useNavigate();

  const { session } = useUserSupabase();

  const {
    handleSubmit,
    showSuccess,
    setShowSuccess,
    showError,
    setShowError,
    errorMessage,
    setErrorMessage,
  } = useRegistrationSubmit();

  if (!session) return <UserNotAllowed />;

  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>
      <Form onSubmit={handleSubmit} />

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
