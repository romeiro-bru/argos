import { useReducer } from "react";
import type { PetsList } from "../types";
import data from "../../pets.json";
import type { FiltersAction, FiltersValue } from "./types";

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

export function useFilterFields() {
  const list = data as PetsList[];

  const [filters, dispatch] = useReducer(reducer, initialValues);

  const setField = (field: keyof typeof initialValues, value: string) =>
    dispatch({ type: "SET_FIELD", field, value });

  const reset = () => dispatch({ type: "RESET" });

  const filteredList = list.filter((pet) => {
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
