
export interface PetsList {
  id: string;
  name: string;
  genre: string;
  age: "Filhote" | "Jovem" | "Adulto" | "Sênior";
  size: string;
  breed: string;
  cidade: string;
  estado: string;
  img: string;
}
