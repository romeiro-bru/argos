import { useEffect, useState } from "react";
import { TagCheckbox } from "../../common/components/tagCheckbox";
import dogsBreed from "../../../dogsBreed.json";

interface TemperamentTagGroupProps {
  setTemperament: React.Dispatch<React.SetStateAction<string[]>>;
}

const temper = [...new Set(dogsBreed.flatMap((b) => b.temperament))];

export const toggle = (
  label: string,
  setSelected: React.Dispatch<React.SetStateAction<Set<string>>>,
) =>
  setSelected((prev) => {
    const next = new Set(prev);
    next.has(label) ? next.delete(label) : next.add(label);
    return next;
  });

export function TemperamentTagGroup({
  setTemperament,
}: TemperamentTagGroupProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set([]));

  useEffect(() => {
    setTemperament(Array.from(selected)); // converte para array, já que select é do tipo Set<string>
  }, [selected]);

  return (
    <div className="flex flex-wrap gap-2">
      {temper.map((option) => (
        <TagCheckbox
          key={option}
          label={option}
          checked={selected.has(option)}
          onChange={() => toggle(option, setSelected)}
          color="purple"
        />
      ))}
    </div>
  );
}
