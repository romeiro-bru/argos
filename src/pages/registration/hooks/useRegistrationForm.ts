import { useReducer } from "react";
import type { FormAction, FormState } from "../types";

const initialState: FormState = {
  size: "Pequeno",
  gender: "Fêmea",
  species: "Cachorro",
  temperament: [],
  fileName: null,
  state: "",
  city: "",
  breed: "",
  age: "",
  name: "",
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

export function useRegistrationForm() {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const setField = (
    field: keyof FormState,
    value: FormState[keyof FormState],
  ) => dispatch({ type: "SET_FIELD", field, value });

  const reset = () => dispatch({ type: "RESET" });

  return { formState, setField, reset };
}
