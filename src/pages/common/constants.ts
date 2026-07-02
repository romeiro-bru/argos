import type { StatesResponse } from "../registration/types";
import type { DistrictResponse } from "./service/types";
import type { PetsList } from "./types";

interface SizeInterface {
  label: string;
  value: PetsList["size"] | "";
}
interface AgeInterface {
  label: string;
  value: PetsList["age"] | "";
}

export const sizeOptions: SizeInterface[] = [
  { label: "-", value: "" },
  { label: "Pequeno (até 10kg)", value: "Pequeno" },
  { label: "Médio (10 - 25kg)", value: "Médio" },
  { label: "Grande (25 - 45kg)", value: "Grande" },
  { label: "Gigante (45kg >)", value: "Gigante" },
];

export const ageOptions: AgeInterface[] = [
    { label: "-", value: "" },
  { label: "filhote (0 - 06 meses)", value: "Filhote" },
  { label: "jovem (06 meses - 2 anos)", value: "Jovem" },
  { label: "adulto (2 - 8 anos)", value: "Adulto" },
  { label: "sênior (acima de 8 anos)", value: "Sênior" },
];

export const stateOptions = (states: StatesResponse[]) => [
  { label: "-", value: "" },
  ...states
    .sort((a, b) => a.sigla.localeCompare(b.sigla))
    .map((state) => {
      const label = `${state.sigla} - ${state.nome}`;
      const value = state.sigla;

      return { label, value };
    }),
];

export const districtsOptions = (districts: DistrictResponse[]) =>
  Array.from(new Map(districts.map((d) => [d.nome, d])).values()) // Map usa d.nome como chave para eliminar duplicatas, depois converte de volta para array
    .sort((a, b) => a.nome.localeCompare(b.nome))
    .map((district) => {
      const label = district.nome;
      const value = district.nome;

      return { label, value };
    });
