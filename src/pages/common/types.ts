export type Gender = "Macho" | "Fêmea";
export type Species = "Cachorro" | "Gato";
export type Age = "Filhote" | "Jovem" | "Adulto" | "Sênior";
export type Size = "Pequeno" | "Médio" | "Grande" | "Gigante";

export interface PetsList {
  id: string;
  name: string;
  gender: Gender;
  age: Age;
  size: Size;
  breed: string;
  city: string;
  state: string;
  img: string;
  neutered: boolean;
  vaccinated: boolean;
  temperament: string[];
  species: Species;
  dewormed: boolean;
}
