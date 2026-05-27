import dogsBreed from "../../dogsBreed.json";
import type { PetsList } from "../home/types";
import { useState } from "react";
import { HealthTagGroup } from "./formFields/healthTagGroup";
import { TemperamentTagGroup } from "./formFields/temperamentTagGroup";
import { SpeciesGroup } from "./formFields/speciesGroup";
import { NameInputField } from "./formFields/nameInputField";
import { GenderGroup } from "./formFields/genderGroup";
import { Select } from "../common/components/select";

// TODO: raça e porte devem mudar de acordo com espécie selecionada
interface SizeInterface {
  label: string;
  value: PetsList["size"];
}
const city = [
  { label: "Rio de Janeiro", value: "Rio de Janeiro" },
  { label: "São Paulo", value: "São Paulo" },
  { label: "Seropédica", value: "Seropédica" },
];

const options: SizeInterface[] = [
  { label: "Pequeno (até 10kg)", value: "Pequeno" },
  { label: "Médio (10 - 25kg)", value: "Médio" },
  { label: "Grande (25 - 45kg)", value: "Grande" },
  { label: "Gigante (45kg >)", value: "Gigante" },
];
interface AgeInterface {
  label: string;
  value: PetsList["age"];
}

const age: AgeInterface[] = [
  { label: "filhote (0 - 06 meses)", value: "Filhote" },
  { label: "jovem (06 meses - 2 anos)", value: "Jovem" },
  { label: "adulto (2 - 8 anos)", value: "Adulto" },
  { label: "sênior (acima de 8 anos)", value: "Sênior" },
];
const breeds = dogsBreed.map((breed) => {
  const label = breed.name;
  const value = breed.name;

  return { label, value };
});

export default function Registration() {
  const [size, setSize] = useState<PetsList["size"]>("Pequeno");
  const [selectedGender, setSelectedGender] =
    useState<PetsList["gender"]>("Fêmea");
  const [species, setSpecies] = useState<PetsList["species"]>("Cachorro");
  const [temperament, setTemperament] = useState<PetsList["temperament"]>([]);

  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>

      <form className="bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 mb-8">
          <SpeciesGroup species={species} setSpecies={setSpecies} />
          <NameInputField />
          <Select label="Raça:" options={breeds} onChange={(value) => {}} />
          <Select label="Idade:" options={age} onChange={(value) => {}} />
          <GenderGroup
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
          />
          <HealthTagGroup />
          <Select label="Estado:" options={city} onChange={() => {}} />
          <Select label="Cidade:" options={city} onChange={() => {}} />

          {species === "Cachorro" && (
            <Select
              onChange={(value) => setSize(value as PetsList["size"])}
              label="Porte:"
              options={options}
            />
          )}
        </div>

        <fieldset className="flex flex-wrap gap-2">
          <span className="font-semibold">Temperamento:</span>
          <TemperamentTagGroup />
        </fieldset>
      </form>
    </main>
  );
}
