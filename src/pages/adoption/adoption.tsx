import { NoData } from "../../components/noData";
import { Card } from "../common/components/card";
import { Select } from "../common/components/select";
import { useFilterFields } from "./hooks/useFilterfields";
import {
  ageOptions,
  districtsOptions,
  sizeOptions,
  stateOptions,
} from "../common/constants";
import { useGetDistricts } from "../common/hooks/useGetDistricts";
import { useGetStates } from "../common/hooks/useGetStates";
import { species } from "./constants";

export default function Adoption() {
  const { filters, setField, reset, filteredList } = useFilterFields();

  const { states, loading } = useGetStates();
  const { districts, loading: isLoading } = useGetDistricts({
    UF: filters.state,
  });

  return (
    <main>
      <h1 className="mb-10">Aumigos disponíveis para adoção</h1>

      <form className="sticky top-0 z-10 bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4 mb-8">
        <div className="flex flex-wrap gap-4 ">
          <Select
            label="Espécie:"
            options={species}
            onChange={(value) => setField("species", value)}
          />
          <Select
            label="Idade:"
            options={ageOptions}
            onChange={(value) => setField("age", value)}
          />
          {filters.species !== "Gato" && (
            <Select
              label="Porte:"
              options={sizeOptions}
              onChange={(value) => setField("size", value)}
            />
          )}

          <Select
            label="Estado:"
            options={stateOptions(states)}
            onChange={(value) => setField("state", value)}
            disabled={loading}
          />
          <Select
            label="Cidade:"
            options={districtsOptions(districts)}
            onChange={(value) => setField("city", value)}
            disabled={loading || isLoading || districts.length === 0}
            className="min-w-[12rem]"
          />
        </div>

        <button
          onClick={() => reset()}
          type="reset"
          className="cursor-pointer bg-[var(--primary-color)] shadow-md font-semibold text-xs text-white rounded-lg px-4 py-2 mt-8"
        >
          limpar filtros
        </button>
      </form>

      {filteredList.length > 0 && <Card list={filteredList} />}

      {filteredList?.length === 0 && (
        <NoData text="Não encontramos nenhum pet correspondente a sua busca." />
      )}
    </main>
  );
}
