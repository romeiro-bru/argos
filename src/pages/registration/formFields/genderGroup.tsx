import type { PetsList } from "../../home/types";
import { TagCheckbox } from "../../common/components/tagCheckbox";

interface GenderGroupProps {
  selectedGender: PetsList["gender"];
  setSelectedGender: React.Dispatch<React.SetStateAction<PetsList["gender"]>>;
}

export function GenderGroup({
  selectedGender,
  setSelectedGender,
}: GenderGroupProps) {
  return (
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
  );
}
