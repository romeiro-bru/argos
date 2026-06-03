import { useState } from "react";
import { TagCheckbox } from "../../common/components/tagCheckbox";
import dogsBreed from "../../../dogsBreed.json";

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

export function TemperamentTagGroup() {
  const [selected, setSelected] = useState<Set<string>>(new Set([]));

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
