
export interface PetsList {
  id: string;
  name: string;
  gender: "Macho" | "Fêmea";
  age: "Filhote" | "Jovem" | "Adulto" | "Sênior";
  size: "Pequeno" | "Médio" | "Grande" | "Gigante";
  breed: string;
  city: string;
  state: string;
  img: string;
  neutered: boolean;
  vaccinated: boolean;
  temperament: string[];
  species: "Cachorro" | "Gato",
  dewormed: boolean
}
