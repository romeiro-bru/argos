import type { PetsList } from "../../common/types";
import { TagCheckbox } from "../../common/components/tagCheckbox";

interface SpeciesGroupProps {
  species: PetsList["species"];
  setSpecies: (value: PetsList["species"]) => void;
}

export function SpeciesGroup({ species, setSpecies }: SpeciesGroupProps) {
  return (
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
  );
}
