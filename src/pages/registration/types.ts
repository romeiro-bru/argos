import type { PetsList } from "../common/types";

export type FormAction =
  | {
      type: "SET_FIELD";
      field: keyof FormState;
      value: string | string[] | boolean | null | File | null;
    }
  | { type: "RESET" };

export interface FormState {
  size: string;
  gender: PetsList["gender"];
  species: PetsList["species"];
  temperament: PetsList["temperament"];
  neutered: boolean;
  vaccinated: boolean;
  dewormed: boolean;
  fileName: string | null;
  file: File | null;
  state: string;
  city: string;
  breed: string;
  age: string;
  name: string;
}
export interface StatesResponse {
  id: number;
  sigla: string;
  nome: string;
  regiao?: {
    id: number;
    sigla: string;
    nome: string;
  };
}