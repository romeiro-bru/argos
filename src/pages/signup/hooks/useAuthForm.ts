import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { service } from "../service/useSignup";

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
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleMode = () => {
    setMode((prev) => (prev === "signup" ? "login" : "signup"));
  };

  const { mutate, reset, isError, isPending, error } = useMutation({
    mutationFn: async (data: FormDataInterface) => {
      const { error } =
        mode === "login"
          ? await service.loginUser(data.email, data.password)
          : await service.signupUser(data.name, data.email, data.password);

      if (error) throw error; // precisa ser um objeto com "message"

      return true;
    },
    onSuccess: () => setShowSuccess(true),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reset(); // limpa o estado da mutation
    mutate(formData);
  };

  return {
    mode,
    toggleMode,
    formData,
    setFormData,
    loading: isPending,
    showSuccess,
    showError: isError,
    setShowSuccess,
    setShowError: () => reset(),
    errorMessage: error?.message ?? "",
    handleSubmit,
  };
}
