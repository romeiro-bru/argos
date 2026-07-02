import { useRegistrationForm } from "./hooks/useRegistrationForm";
import { useGetStates } from "../common/hooks/useGetStates";
import { useGetDistricts } from "../common/hooks/useGetDistricts";
import { useUserSupabase } from "../../context/userSupabaseContext";
import { Form } from "./components/form";
import { UserNotAllowed } from "./components/userNotAllowed";
import { ErrorModal } from "../../components/modalError";


export default function Registration() {
  const { session } = useUserSupabase();
  const { formState, setField, errors, validateForm } = useRegistrationForm();
  const { states, loading } = useGetStates();
  const { districts, loading: isLoading } = useGetDistricts({
    UF: formState.state,
  });

  // TODO: verificar se valores de size e age foram selecionados

  if (!session) return <UserNotAllowed />;

  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>
      <Form
        districts={districts}
        errors={errors}
        formState={formState}
        isLoading={isLoading}
        loading={loading}
        setField={setField}
        states={states}
        validateForm={validateForm}
      />

      <ErrorModal isOpen={false} onClose={() => {}} message="Não foi possível finalizar o cadastro do pet. Tente novamente." />
    </main>
  );
}
