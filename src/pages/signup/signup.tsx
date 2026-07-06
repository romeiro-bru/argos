import { EmailField } from "./formFields/emailField";
import { PasswordField } from "./formFields/passwordField";
import { NameField } from "./formFields/nameField";
import { Spinner } from "../../assets/spinner";
import { SuccessModal } from "../../components/modalSuccess";
import { appRoutes } from "../../routes";
import { useNavigate } from "react-router-dom";
import { ErrorModal } from "../../components/modalError";
import { useAuthForm } from "./useAuthForm";
import { AuthFormSkeleton } from "./authFormSkeleton";
import { useUserSupabase } from "../../context/userSupabaseContext";
import { WarningTag } from "../../components/warningTag";

export interface FormDataInterface {
  name: string;
  email: string;
  password: string;
}

export function Signup() {
  const navigate = useNavigate();
  const {
    formData,
    setFormData,
    mode,
    handleSubmit,
    loading,
    showError,
    showSuccess,
    toggleMode,
    setShowError,
    setShowSuccess,
    errorMessage,
  } = useAuthForm();

  const isLogin = mode === "login";

  const { session } = useUserSupabase();

  return (
    <main>
      {session ? (
        <section>
          <h1 className="mb-8">Usuário já autenticado.</h1>
          <WarningTag message="Para cadastrar nova conta é necessário realizar logout." />
        </section>
      ) : (
        <>
          <div className="flex gap-2 mb-8 items-center">
            <h1>Criar conta</h1>
          </div>
          <form onSubmit={handleSubmit} className="mb-8">
            <section className="flex flex-wrap gap-4 bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4 mb-4">
              {loading ? (
                <AuthFormSkeleton showName={!isLogin} />
              ) : (
                <>
                  <EmailField formData={formData} setFormData={setFormData} />
                  {!isLogin && (
                    <NameField formData={formData} setFormData={setFormData} />
                  )}
                  <PasswordField
                    formData={formData}
                    setFormData={setFormData}
                  />
                </>
              )}
            </section>

            <div className="flex gap-2">
              <button
                disabled={loading}
                onClick={toggleMode}
                type="button"
                className="cursor-pointer border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] shadow-md rounded-lg py-2 px-4 mr-2"
              >
                Trocar para {isLogin ? "Criar conta" : "Login"}
              </button>
              <button
                disabled={loading || !!session}
                type="submit"
                className="flex gap-2  items-center cursor-pointer bg-[var(--secondary-color)] shadow-md font-semibold text-white rounded-lg py-2 px-6"
              >
                {loading && <Spinner className="size-4" />}

                {isLogin ? "Login" : "Criar conta"}
              </button>
            </div>
          </form>
        </>
      )}

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          navigate(appRoutes.REGISTER.path);
        }}
        title={isLogin ? "Login realizado!" : "Conta criada!"}
        message={
          isLogin
            ? "Login realizado com sucesso."
            : "Uma mensagem foi enviada para o seu e-mail, após a confirmação você poderá cadastrar um animal para adoção."
        }
        actionLabel="Continuar"
        onAction={() => navigate(appRoutes.REGISTER.path)}
      />
      <ErrorModal
        isOpen={showError}
        onClose={() => {
          setShowError(false);
          navigate(appRoutes.SIGNUP.path);
        }}
        title={
          isLogin ? "Erro ao autenticar" : "Não foi possível criar a sua conta."
        }
        onAction={() => navigate(appRoutes.LANDING.path)}
        actionLabel="Continuar"
        message={errorMessage}
      />
    </main>
  );
}
