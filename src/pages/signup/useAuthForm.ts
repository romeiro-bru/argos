import { useState } from "react";
import { loginUser, signupUser } from "./service/useSignup";

export interface FormDataInterface {
  name: string;
  email: string;
  password: string;
}

type Mode = "login" | "signup";

const initialFormData: FormDataInterface = {
  name: "",
  email: "",
  password: "",
};

export function useAuthForm() {
  const [mode, setMode] = useState<Mode>("signup");
  const [formData, setFormData] = useState<FormDataInterface>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleMode = () => {
    setMode((prev) => (prev === "signup" ? "login" : "signup"));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(false);
    setErrorMessage("");
    setLoading(true);

    const { error } =
      mode === "login"
        ? await loginUser(formData.email, formData.password)
        : await signupUser(formData.name, formData.email, formData.password);

    if (error) {
      setShowError(true);
      setErrorMessage(error.message);
    } else {
      setShowSuccess(true);
    }
  };

  return {
    mode,
    toggleMode,
    formData,
    setFormData,
    loading,
    showSuccess,
    showError,
    setShowSuccess,
    setShowError,
    errorMessage,
    handleSubmit,
  };
}
