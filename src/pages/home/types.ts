
export interface PetsList {
  id: string;
  name: string;
  gender: "Macho" | "Fêmea";
  age: "Filhote" | "Jovem" | "Adulto" | "Sênior";
  size: "Pequeno" | "Médio" | "Grande";
  breed: string;
  cidade: string;
  estado: string;
  img: string;
}
