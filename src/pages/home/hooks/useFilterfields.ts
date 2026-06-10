import { useReducer } from "react";

type FiltersAction =
  | {
      type: "SET_FIELD";
      field: keyof typeof initialValues;
      value: string;
    }
  | { type: "RESET" };

interface FiltersValue {
  species: string;
  age: string;
  size: string;
}

const initialValues: FiltersValue = {
  species: "",
  age: "",
  size: "",
};

function reducer(state: FiltersValue, action: FiltersAction): FiltersValue {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialValues;
    default:
      return state;
  }
}

export function useFilterFields() {
  const [filters, dispatch] = useReducer(reducer, initialValues);

  const setField = (field: keyof typeof initialValues, value: string) =>
    dispatch({ type: "SET_FIELD", field, value });

  const reset = () => dispatch({ type: "RESET" });

  return { filters, setField, reset };
}
