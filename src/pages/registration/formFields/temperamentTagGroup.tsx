import { useState } from "react";
import { TagCheckbox } from "../../common/components/tagCheckbox";
import dogsBreed from "../../../dogsBreed.json";

export const temper = [...new Set(dogsBreed.flatMap((b) => b.temperament))];

export function TemperamentTagGroup() {
  const [selected, setSelected] = useState<Set<string>>(new Set([]));

  const toggle = (label: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });

  return (
    <div className="flex flex-wrap gap-2">
      {temper.map((option) => (
        <TagCheckbox
          key={option}
          label={option}
          checked={selected.has(option)}
          onChange={() => toggle(option)}
          color="purple"
        />
      ))}
    </div>
  );
}
