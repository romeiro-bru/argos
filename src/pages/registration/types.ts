import type { PetsList } from "../home/types";

export type FormAction =
  | {
      type: "SET_FIELD";
      field: keyof FormState;
      value: FormState[keyof FormState];
    }
  | { type: "RESET" };

export interface FormState {
  size: PetsList["size"];
  gender: PetsList["gender"];
  species: PetsList["species"];
  temperament: PetsList["temperament"];
  fileName: string | null;
  state: string;
  city: string;
  breed: string;
  age: string;
  name: string;
}
export interface ApiResponse {
  id: number;
  sigla: string;
  nome: string;
  regiao?: {
    id: number;
    sigla: string;
    nome: string;
  };
}

export interface DistrictResponse {
  id: number;
  nome: string;
  municipoio: {
    id: number;
    nome: string;
  };
}
