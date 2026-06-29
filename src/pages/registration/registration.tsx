import { HealthTagGroup } from "./formFields/healthTagGroup";
import { TemperamentTagGroup } from "./formFields/temperamentTagGroup";
import { SpeciesGroup } from "./formFields/speciesGroup";
import { NameInputField } from "./formFields/nameInputField";
import { GenderGroup } from "./formFields/genderGroup";
import { Select } from "../common/components/select";
import { dogBreeds, catBreeds, ageOptions, sizeOptions } from "./constants";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../routes";
import { useRegistrationForm } from "./hooks/useRegistrationForm";
import { districtsOptions, stateOptions } from "../common/constants";
import { useGetStates } from "../common/hooks/useGetStates";
import { useGetDistricts } from "../common/hooks/useGetDistricts";
import { UploadImageField } from "./formFields/uploadImageField";
import { supabase } from "../../../supabase-client";

export default function Registration() {
  const { formState, setField, errors, validateForm } = useRegistrationForm();
  const navigate = useNavigate();
  const { states, loading } = useGetStates();
  const { districts, loading: isLoading } = useGetDistricts({
    UF: formState.state,
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted", formState);

    if (!validateForm()) return;

    const {data, error} = await supabase.from("new-pets").insert(formState).single()
  
    console.log(data, error)
    if (error) {
      console.error("Erro ao cadastrar pet:", error);
      // TODO: Adicionar tratamento visual de erro (modal de erro)
      return;
    }
    
    // TODO: Adicionar feedback de sucesso ao usuário
  };

  return (
    <main>
      <h1 className="mb-8">Cadastre um pet para adoção</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <section className="bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4 mb-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
            <SpeciesGroup
              species={formState.species}
              setSpecies={(value) => setField("species", value)}
            />
            <NameInputField
              onChange={(value) => setField("name", value)}
              error={errors.name}
              onBlur={validateForm}
            />
            <Select
              label="Raça:"
              options={formState.species === "Cachorro" ? dogBreeds : catBreeds}
              onChange={(value) => setField("breed", value)}
              onBlur={validateForm}
            />
            <Select
              label="Idade:"
              options={ageOptions}
              onChange={(value) => setField("age", value)}
            />
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
              onBlur={validateForm}
              error={errors.state}
            />
            <Select
              disabled={loading || isLoading || districts.length === 0}
              label="Cidade:"
              options={districtsOptions(districts)}
              onChange={(value) => setField("city", value)}
              onBlur={validateForm}
              error={errors.city}
            />

            {formState.species === "Cachorro" && (
              <Select
                onChange={(value) => setField("size", value)}
                label="Porte:"
                options={sizeOptions}
              />
            )}

            <UploadImageField
              formState={formState}
              setField={(file) => {
                setField("fileName", file ? file.name : "");
                setField("file", file);
              }}
              validateForm={validateForm}
              errors={errors}
            />
          </div>

          <fieldset className="flex flex-wrap gap-2 mt-2">
            <span className="font-semibold">Temperamento:</span>
            <TemperamentTagGroup
              setTemperament={(value) => setField("temperament", value)}
              onBlur={validateForm}
              error={errors.temperament}
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
