import type { PetsList } from "../home/types";
import dogsBreed from "../../dogsBreed.json";
import { TagCheckbox } from "./tagCheckbox";
import { useState } from "react";
import { HealthTagGroup } from "./healthTagGroup";
import { TemperamentTagGroup } from "./temperamentTagGroup";

interface AgeInterface {
  label: string;
  value: PetsList["age"];
}
interface SizeInterface {
  label: string;
  value: PetsList["size"];
}

// TODO: raça e porte devem mudar de acordo com espécie selecionada
const age: AgeInterface[] = [
  { label: "filhote (0 - 06 meses)", value: "Filhote" },
  { label: "jovem (06 meses - 2 anos)", value: "Jovem" },
  { label: "adulto (2 - 8 anos)", value: "Adulto" },
  { label: "sênior (acima de 8 anos)", value: "Sênior" },
];

const size: SizeInterface[] = [
  { label: "Pequeno (até 10kg)", value: "Pequeno" },
  { label: "Médio (10 - 25kg)", value: "Médio" },
  { label: "Grande (25 - 45kg)", value: "Grande" },
  { label: "Gigante (45kg >)", value: "Gigante" },
];

export default function Registration() {
  const [selectedSize, setSelectedSize] = useState<PetsList["size"]>("Médio");
  const [selectedGender, setSelectedGender] =
    useState<PetsList["gender"]>("Fêmea");
  const [species, setSpecies] = useState<PetsList["species"]>("Cachorro");
  const [temperament, setTemperament] = useState<PetsList["temperament"]>([]);

  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>

      <form className="bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 mb-8">
          <fieldset className="flex flex-col gap-2">
            <legend className="font-semibold">Selecione a espécie:</legend>

            <div className="flex flex-wrap gap-2 mt-2">
              <TagCheckbox
                key="cachorro"
                label="Cachorro"
                checked={species === "Cachorro"}
                onChange={() => setSpecies("Cachorro")}
                color="purple"
              />
              <TagCheckbox
                key="gato"
                label="Gato"
                checked={species === "Gato"}
                onChange={() => setSpecies("Gato")}
                color="purple"
              />
            </div>
          </fieldset>

          <fieldset>
            <label className="flex flex-col mb-2 font-semibold" htmlFor="name">
              Nome do pet para adoção:
            </label>
            <input
              type="text"
              id="name"
              className="p-2 rounded-lg text-sm w-full"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="breed">
              Raça:
            </label>
            <select className="text-sm" id="breed">
              {dogsBreed.map((breed) => (
                <option value={breed.name}>{breed.name}</option>
              ))}
            </select>
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="age">
              Idade:
            </label>
            <select id="age" className="text-sm">
              {age.map((pet) => (
                <option value={pet.value}>{pet.label}</option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <legend className="font-semibold">Sexo:</legend>

            <div className="flex flex-wrap gap-2 mt-2">
              <TagCheckbox
                key="macho"
                label="Macho"
                checked={selectedGender === "Macho"}
                onChange={() => setSelectedGender("Macho")}
                color="purple"
              />
              <TagCheckbox
                key="femea"
                label="Fêmea"
                checked={selectedGender === "Fêmea"}
                onChange={() => setSelectedGender("Fêmea")}
                color="purple"
              />
            </div>
          </fieldset>

          <HealthTagGroup />

          <fieldset className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="size">
              Porte:
            </label>

            <div className="flex flex-wrap gap-2">
              {size.map((size) => (
                <TagCheckbox
                  key={size.value}
                  label={size.label}
                  checked={selectedSize === size.value}
                  onChange={() => setSelectedSize(size.value)}
                  color="purple"
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="state">
              Estado:
            </label>
            <select id="state" className="text-sm">
              <option value="RJ">Rio de Janeiro</option>
              <option value="SP">São Paulo</option>
            </select>
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="city">
              Cidade:
            </label>
            <select id="city" className="text-sm">
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="São Paulo">São Paulo</option>
            </select>
          </fieldset>
        </div>

        <fieldset className="flex flex-wrap gap-2">
          <span className="font-semibold">Temperamento:</span>
          <TemperamentTagGroup />
        </fieldset>
      </form>
    </main>
  );
}
