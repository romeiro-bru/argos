import type { PetsList } from "../home/types";
import dogsBreed from "../../dogsBreed.json";
import catsBreed from "../../catsBreed.json";

import type { ApiResponse, DistrictResponse } from "./types";

interface SizeInterface {
  label: string;
  value: PetsList["size"];
}
interface AgeInterface {
  label: string;
  value: PetsList["age"];
}

export const stateOptions = (states: ApiResponse[]) =>
  states
    .sort((a, b) => a.sigla.localeCompare(b.sigla))
    .map((state) => {
      const label = `${state.sigla} - ${state.nome}`;
      const value = state.sigla;

      return { label, value };
    });

export const districtsOptions = (districts: DistrictResponse[]) =>
  districts
    .sort((a, b) => a.nome.localeCompare(b.nome))
    .map((district) => {
      const label = district.nome;
      const value = district.nome;

      return { label, value };
    });

export const sizeOptions: SizeInterface[] = [
  { label: "Pequeno (até 10kg)", value: "Pequeno" },
  { label: "Médio (10 - 25kg)", value: "Médio" },
  { label: "Grande (25 - 45kg)", value: "Grande" },
  { label: "Gigante (45kg >)", value: "Gigante" },
];

export const ageOptions: AgeInterface[] = [
  { label: "filhote (0 - 06 meses)", value: "Filhote" },
  { label: "jovem (06 meses - 2 anos)", value: "Jovem" },
  { label: "adulto (2 - 8 anos)", value: "Adulto" },
  { label: "sênior (acima de 8 anos)", value: "Sênior" },
];

export const dogBreeds = dogsBreed.map((breed) => {
  const label = breed.name;
  const value = breed.name;

  return { label, value };
});

export const catBreeds = catsBreed.map((breed) => {
  const label = breed.name;
  const value = breed.name;

  return { label, value };
});
