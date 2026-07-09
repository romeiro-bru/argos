import { useReducer } from "react";
import type { FiltersAction, FiltersValue } from "./types";
import type { GetPetsListResponse } from "../types";

interface UseFilterFieldsProps {
  pets: GetPetsListResponse[];
}

const initialValues: FiltersValue = {
  species: "",
  age: "",
  size: "",
  city: "",
  state: "",
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

export function useFilterFields({ pets }: UseFilterFieldsProps) {
  const [filters, dispatch] = useReducer(reducer, initialValues);


  const setField = (field: keyof typeof initialValues, value: string) =>
    dispatch({ type: "SET_FIELD", field, value });

  const reset = () => dispatch({ type: "RESET" });

  const filteredList = pets.filter((pet) => {
    // filtro ativo? o pet atende a condição do filtro para ser incluído na lista filtrada?
    if (filters.species && pet.species !== filters.species) return false;
    if (filters.age && pet.age !== filters.age) return false;
    if (filters.size && pet.size !== filters.size) return false;
    if (filters.state && pet.state !== filters.state) return false;
    if (filters.city && pet.city !== filters.city) return false;
    return true;
  });

  return { filters, setField, reset, filteredList };
}
