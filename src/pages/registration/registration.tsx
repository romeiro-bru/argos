import type { PetsList } from "../home/types";
import { useState } from "react";
import { HealthTagGroup } from "./formFields/healthTagGroup";
import { TemperamentTagGroup } from "./formFields/temperamentTagGroup";
import { SpeciesGroup } from "./formFields/speciesGroup";
import { NameInputField } from "./formFields/nameInputField";
import { GenderGroup } from "./formFields/genderGroup";
import { Select } from "../common/components/select";
import {
  age,
  dogBreeds,
  catBreeds,
  districtsOptions,
  options,
  stateOptions,
} from "./constants";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../routes";
import { Upload } from "../../assets/upload";
import { useGetStates } from "./hooks/useGetStates";
import { useGetDistricts } from "./hooks/useGetDistricts";

// TODO: raça e porte devem mudar de acordo com espécie selecionada
// TODO: add husky

export default function Registration() {
  const navigate = useNavigate();
  const [size, setSize] = useState<PetsList["size"]>("Pequeno");
  const [selectedGender, setSelectedGender] =
    useState<PetsList["gender"]>("Fêmea");
  const [species, setSpecies] = useState<PetsList["species"]>("Cachorro");
  const [temperament, setTemperament] = useState<PetsList["temperament"]>([]);
  const [fileName, setFileName] = useState<string | null>(null);
  const [state, setState] = useState("");

  const { states, error, loading } = useGetStates();
  const { districts, loading: isLoading } = useGetDistricts({ UF: state });

  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>

      <form>
        <section className="bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4 mb-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 mb-8">
            <SpeciesGroup
              species={species}
              setSpecies={(value) => setSpecies(value)}
            />
            <NameInputField />
            <Select label="Raça:" options={species === "Cachorro" ? dogBreeds : catBreeds} onChange={(value) => {}} />
            <Select label="Idade:" options={age} onChange={(value) => {}} />
            <GenderGroup
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
            <HealthTagGroup />
            <Select
              disabled={loading}
              label="Estado:"
              options={stateOptions(states)}
              onChange={(value) => setState(value)}
            />
            <Select
              disabled={loading || isLoading || districts.length === 0}
              label="Cidade:"
              options={districtsOptions(districts)}
              onChange={() => {}}
            />

            {species === "Cachorro" && (
              <Select
                onChange={(value) => setSize(value as PetsList["size"])}
                label="Porte:"
                options={options}
              />
            )}
            <div>
              <label className="font-semibold">Imagem:</label>
              <input
                id="f2"
                type="file"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
              <label
                htmlFor="f2"
                className="flex items-center gap-2 cursor-pointer p-2 bg-[var(--bg) shadow-md rounded-lg hover:opacity-80 transition-opacity"
              >
                <Upload />
                Escolher imagem
                {fileName && (
                  <span className="text-xs italic text-[var(--gray)] px-2">
                    ✓ {fileName}
                  </span>
                )}
              </label>
            </div>
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
          <button
            onClick={() => navigate(appRoutes.HOME.path)}
            type="button"
            className="cursor-pointer bg-[var(--gray)] shadow-md font-semibold text-white rounded-lg py-2 px-6"
          >
            cancelar
          </button>
        </div>
      </form>
    </main>
  );
}
