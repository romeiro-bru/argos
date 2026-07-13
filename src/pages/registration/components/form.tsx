import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../../routes";
import { Select } from "../../common/components/select";
import {
  ageOptions,
  districtsOptions,
  sizeOptions,
  stateOptions,
} from "../../common/constants";
import { GenderGroup } from "./formFields/genderGroup";
import { HealthTagGroup } from "./formFields/healthTagGroup";
import { NameInputField } from "./formFields/nameInputField";
import { SpeciesGroup } from "./formFields/speciesGroup";
import { TemperamentTagGroup } from "./formFields/temperamentTagGroup";
import { UploadImageField } from "./formFields/uploadImageField";
import { catBreeds, dogBreeds } from "./constants";
import { useGetStates } from "../../common/hooks/useGetStates";
import { useGetDistricts } from "../../common/hooks/useGetDistricts";
import type { FormState } from "../types";
import { useFormFields } from "../hooks/useFormFields";

interface FormProps {
  isPending: boolean;
  onSubmit: (params: {
    e: React.FormEvent<HTMLFormElement>;
    formState: FormState;
    validateForm: () => boolean;
  }) => Promise<void> | void;
}

export function Form({ onSubmit, isPending }: FormProps) {
  const navigate = useNavigate();

  const { formState, setField, errors, validateForm } = useFormFields();

  const { districts, loading: isLoading } = useGetDistricts({
    UF: formState.state,
  });
  const { states, loading } = useGetStates();

  return (
    <form
      onSubmit={(e) => onSubmit({ e, formState, validateForm })}
      className="mb-8"
    >
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
            error={errors.age}
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
              error={errors.size}
              onBlur={validateForm}
            />
          )}

          <UploadImageField
            formState={formState}
            setField={(file) => setField("image", file)}
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
          disabled={isPending}
          type="submit"
          className="cursor-pointer bg-[var(--secondary-color)] shadow-md font-semibold text-white rounded-lg py-2 px-6"
        >
          submit
        </button>
        <button
          onClick={() => navigate(appRoutes.ADOPTION.path)}
          type="button"
          className="cursor-pointer bg-[var(--gray)] shadow-md font-semibold text-white rounded-lg py-2 px-6"
        >
          cancelar
        </button>
      </div>
    </form>
  );
}
