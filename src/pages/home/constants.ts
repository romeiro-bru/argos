import type { PetsList } from "./types";

interface SizeInterface {
  label: string;
  value: PetsList["size"] | "";
}
interface AgeInterface {
  label: string;
  value: PetsList["age"] | "";
}

export const ageOptions: AgeInterface[] = [
  { label: "-", value: "" },

  { label: "filhote (0 - 06 meses)", value: "Filhote" },
  { label: "jovem (06 meses - 2 anos)", value: "Jovem" },
  { label: "adulto (2 - 8 anos)", value: "Adulto" },
  { label: "sênior (acima de 8 anos)", value: "Sênior" },
];
export const species = [
  { label: "-", value: "" },
  { label: "Cachorro", value: "Cachorro" },
  { label: "Gato", value: "Gato" },
];
export const sizeOptions: SizeInterface[] = [
  { label: "-", value: "" },

  { label: "Pequeno (até 10kg)", value: "Pequeno" },
  { label: "Médio (10 - 25kg)", value: "Médio" },
  { label: "Grande (25 - 45kg)", value: "Grande" },
  { label: "Gigante (45kg >)", value: "Gigante" },
];
