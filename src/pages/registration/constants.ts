import type { PetsList } from "../home/types";
import dogsBreed from "../../dogsBreed.json";
import type { ApiResponse } from "./service/service";

interface SizeInterface {
  label: string;
  value: PetsList["size"];
}
interface AgeInterface {
  label: string;
  value: PetsList["age"];
}

export const stateOptions = (states: ApiResponse[]) =>
  states.map((state) => {
    const label = state.sigla;
    const value = state.sigla;

    return { label, value };
  });

export const city = [
  { label: "Rio de Janeiro", value: "Rio de Janeiro" },
  { label: "São Paulo", value: "São Paulo" },
  { label: "Seropédica", value: "Seropédica" },
];

export const options: SizeInterface[] = [
  { label: "Pequeno (até 10kg)", value: "Pequeno" },
  { label: "Médio (10 - 25kg)", value: "Médio" },
  { label: "Grande (25 - 45kg)", value: "Grande" },
  { label: "Gigante (45kg >)", value: "Gigante" },
];

export const age: AgeInterface[] = [
  { label: "filhote (0 - 06 meses)", value: "Filhote" },
  { label: "jovem (06 meses - 2 anos)", value: "Jovem" },
  { label: "adulto (2 - 8 anos)", value: "Adulto" },
  { label: "sênior (acima de 8 anos)", value: "Sênior" },
];

export const breeds = dogsBreed.map((breed) => {
  const label = breed.name;
  const value = breed.name;

  return { label, value };
});
