import { useState } from "react";
import { supabase } from "../../../supabase-client";
import { EmailField } from "./formFields/emailField";
import { PasswordField } from "./formFields/passwordField";
import { NameField } from "./formFields/nameField";
import { PulseLoading } from "../../components/pulseLoading";
import { Spinner } from "../../assets/spinner";
import { SuccessModal } from "../../components/modalSuccess";
import { appRoutes } from "../../routes";
import { useNavigate } from "react-router-dom";

export interface FormDataInterface {
  name: string;
  email: string;
  password: string;
}

export function Signup() {
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormDataInterface>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          },
        },
      });

      if (error) {
        console.error("Error signing up:", error.message);
      } else {
        setShowSuccess(true);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error("Error signing in:", error.message);
      } else {
        setShowSuccess(true);
      }
    }

    setLoading(false);
  };

  return (
    <main>
      <div className="flex gap-2 mb-8 items-center">
        <h1>Criar conta</h1>
        <p className="flex w-fit m-auto gap-2 items-center font-semibold text-xs text-[var(--subtitle)] border bg-[#fff] rounded-sm p-2">
          <img src="/user-yellow.png" className="h-4" />É necessário criar uma
          conta antes de cadastrar um animal para adoção.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mb-8">
        <section className="flex flex-wrap gap-4 bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4 mb-4">
          {loading ? (
            <>
              <PulseLoading label="E-mail:" height={35} width={170} />
              {!isSignUp && (
                <PulseLoading label="Nome:" height={35} width={170} />
              )}
              <PulseLoading label="Senha:" height={35} width={170} />
            </>
          ) : (
            <>
              <EmailField formData={formData} setFormData={setFormData} />
              {!isSignUp && (
                <NameField formData={formData} setFormData={setFormData} />
              )}
              <PasswordField formData={formData} setFormData={setFormData} />
            </>
          )}
        </section>

        <div className="flex gap-2">
          <button
            disabled={loading}
            onClick={() => setIsSignUp(!isSignUp)}
            type="button"
            className="cursor-pointer border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] shadow-md rounded-lg py-2 px-4 mr-2"
          >
            Trocar para {isSignUp ? "Criar conta" : "Login"}
          </button>
          <button
            disabled={loading}
            type="submit"
            className="flex gap-2  items-center cursor-pointer bg-[var(--secondary-color)] shadow-md font-semibold text-white rounded-lg py-2 px-6"
          >
            {loading && <Spinner className="size-4" />}

            {isSignUp ? "Login" : "Criar conta"}
          </button>
        </div>

        <SuccessModal
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
          title={!isSignUp ? "Conta criada!" : "Login realizado!"}
          message={
            !isSignUp
              ? "Sua conta foi criada com sucesso. Agora você já pode cadastrar um animal para adoção."
              : "Login realizado com sucesso."
          }
          actionLabel="Continuar"
          onAction={() => navigate(appRoutes.HOME.path)}
        />
      </form>
    </main>
  );
}
