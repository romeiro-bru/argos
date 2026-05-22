
export interface PetsList {
  id: string;
  name: string;
  genre: "Macho" | "Fêmea";
  age: "Filhote" | "Jovem" | "Adulto" | "Sênior";
  size: "Pequeno" | "Médio" | "Grande";
  breed: string;
  cidade: string;
  estado: string;
  img: string;
}
