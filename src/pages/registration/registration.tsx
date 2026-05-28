import type { PetsList } from "../home/types";
import { useState } from "react";
import { HealthTagGroup } from "./formFields/healthTagGroup";
import { TemperamentTagGroup } from "./formFields/temperamentTagGroup";
import { SpeciesGroup } from "./formFields/speciesGroup";
import { NameInputField } from "./formFields/nameInputField";
import { GenderGroup } from "./formFields/genderGroup";
import { Select } from "../common/components/select";
import { age, breeds, city, options } from "./constants";

// TODO: raça e porte devem mudar de acordo com espécie selecionada
// TODO: add husky


export default function Registration() {
  const [size, setSize] = useState<PetsList["size"]>("Pequeno");
  const [selectedGender, setSelectedGender] =
    useState<PetsList["gender"]>("Fêmea");
  const [species, setSpecies] = useState<PetsList["species"]>("Cachorro");
  const [temperament, setTemperament] = useState<PetsList["temperament"]>([]);

  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>

      <form>
        <section className="bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4 mb-4">
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
        </section>

        <div className="flex gap-2">
          <button
            type="submit"
            className="cursor-pointer bg-[var(--secondary-color)] shadow-md font-semibold text-white rounded-lg py-2 px-6"
          >
            submit
          </button>
          <button type="button" className="cursor-pointer bg-[var(--gray)] shadow-md font-semibold text-white rounded-lg py-2 px-6">
            cancelar
          </button>
        </div>
      </form>
    </main>
  );
}
