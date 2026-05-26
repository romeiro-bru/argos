import { useState } from "react";
import { TagCheckbox } from "./tagCheckbox";

const health = [
  { label: "Castrado", value: "neutered" },
  { label: "Vacinado", value: "vaccinated" },
  { label: "Vermifugado", value: "dewormed" },
];

export function HealthTagGroup() {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(["Castrado", "Vacinado"]),
  );

  const toggle = (label: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });

  return (
    <div className="flex flex-col gap-2">
      <p className="mb-3 font-semibold">Informações sobre a saúde do animal:</p>
      <div className="flex flex-wrap gap-2">
        {health.map((option) => (
          <TagCheckbox
            key={option.value}
            label={option.label}
            checked={selected.has(option.value)}
            onChange={() => toggle(option.value)}
            color="green"
          />
        ))}
      </div>
    </div>
  );
}
