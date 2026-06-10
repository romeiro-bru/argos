import type { PetsList } from "../home/types";
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
import { useRegistrationForm } from "./hooks/useRegistrationForm";

export default function Registration() {
  const { formState, setField } = useRegistrationForm();
  const navigate = useNavigate();
  const { states, loading } = useGetStates();
  const { districts, loading: isLoading } = useGetDistricts({
    UF: formState.state,
  });

  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>

      <form>
        <section className="bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4 mb-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 mb-8">
            <SpeciesGroup
              species={formState.species}
              setSpecies={(value) => setField("species", value)}
            />
            <NameInputField />
            <Select
              label="Raça:"
              options={formState.species === "Cachorro" ? dogBreeds : catBreeds}
              onChange={() => {}}
            />
            <Select label="Idade:" options={age} onChange={() => {}} />
            <GenderGroup
              selectedGender={formState.gender}
              setSelectedGender={(value) => setField("gender", value)}
            />
            <HealthTagGroup
              dewormed={formState.dewormed}
              neutered={formState.neutered}
              vaccinated={formState.vaccinated}
              onChange={(field, value) => setField(field, value)}
            />
            <Select
              disabled={loading}
              label="Estado:"
              options={stateOptions(states)}
              onChange={(value) => setField("state", value)}
            />
            <Select
              disabled={loading || isLoading || districts.length === 0}
              label="Cidade:"
              options={districtsOptions(districts)}
              onChange={() => {}}
            />

            {formState.species === "Cachorro" && (
              <Select
                onChange={(value) =>
                  setField("species", value as PetsList["size"])
                }
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
                onChange={(e) =>
                  setField("fileName", e.target.files?.[0]?.name ?? null)
                }
              />
              <label
                htmlFor="f2"
                className="flex items-center gap-2 cursor-pointer p-2 bg-[var(--bg) shadow-md rounded-lg hover:opacity-80 transition-opacity"
              >
                <Upload />
                Escolher imagem
                {formState.fileName && (
                  <span className="text-xs italic text-[var(--gray)] px-2">
                    ✓ {formState.fileName}
                  </span>
                )}
              </label>
            </div>
          </div>

          <fieldset className="flex flex-wrap gap-2">
            <span className="font-semibold">Temperamento:</span>
            <TemperamentTagGroup
              setTemperament={(value) => setField("temperament", value)}
            />
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
