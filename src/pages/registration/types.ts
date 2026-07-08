import type { PetsList } from "../common/types";

export type FormAction =
  | {
      type: "SET_FIELD";
      field: keyof FormState;
      value: string | string[] | boolean | null | File | null;
    }
  | { type: "RESET" };

// tipagem dos campos do form
export interface FormState {
  size: string;
  gender: PetsList["gender"];
  species: PetsList["species"];
  temperament: PetsList["temperament"];
  neutered: boolean;
  vaccinated: boolean;
  dewormed: boolean;
  image: File | null; // file é enviado para o bucket
  state: string;
  city: string;
  breed: string;
  age: string;
  name: string;
}

// tipagem da request para table new-pets
export type NewPet = Omit<FormState, "image"> & {
  imageUrl: string; // imagem retornada do bucket supabase
};

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
