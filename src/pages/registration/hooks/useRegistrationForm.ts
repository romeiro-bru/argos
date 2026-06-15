import { useReducer, useState } from "react";
import type { FormAction, FormState } from "../types";

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  size: "Pequeno",
  gender: "Fêmea",
  species: "Cachorro",
  temperament: [],
  fileName: null,
  state: "",
  city: "",
  breed: "SRD",
  age: "Filhote",
  neutered: false,
  vaccinated: false,
  dewormed: false,
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function validateFields(formState: FormState): FormErrors {
  const errors: FormErrors = {};

  if (formState.name.length === 0 || formState.name.length > 30)
    errors.name = "Nome deve ter entre 1 e 30 caracteres.";

  if (formState.state.length === 0) errors.state = "Selecione um estado.";

  if (formState.city.length === 0) errors.city = "Selecione uma cidade.";

  if (formState.temperament.length === 0)
    errors.temperament = "Selecione pelo menos uma característica.";

  if (!formState.fileName) errors.fileName = "Selecione uma imagem.";

  return errors;
}

export function useRegistrationForm() {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const setField = (
    field: keyof FormState,
    value: FormState[keyof FormState],
  ) => {
    dispatch({ type: "SET_FIELD", field, value });
    // limpa o erro do campo conforme o form é preenchido
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors = validateFields(formState);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  console.log("hook", errors);

  return { formState, setField, reset, errors, validateForm };
}
