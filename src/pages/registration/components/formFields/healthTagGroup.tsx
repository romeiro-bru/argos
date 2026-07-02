import { TagCheckbox } from "../../../common/components/tagCheckbox";

interface HealthTagGroupProps {
  neutered: boolean;
  vaccinated: boolean;
  dewormed: boolean;
  onChange: (
    field: "neutered" | "vaccinated" | "dewormed",
    value: boolean,
  ) => void;
}

export function HealthTagGroup({
  dewormed,
  neutered,
  vaccinated,
  onChange,
}: HealthTagGroupProps) {
  const health = [
    { label: "Castrado", field: "neutered" as const, value: neutered },
    { label: "Vacinado", field: "vaccinated" as const, value: vaccinated },
    { label: "Vermifugado", field: "dewormed" as const, value: dewormed },
  ];

  return (
    <div className="flex flex-col gap-2">
      <p className="mb-3 font-semibold">Informações sobre a saúde do animal:</p>
      <div className="flex flex-wrap gap-2">
        {health.map((option) => (
          <TagCheckbox
            key={option.field}
            label={option.label}
            checked={option.value}
            onChange={() => onChange(option.field, !option.value)}
            color="purple"
          />
        ))}
      </div>
    </div>
  );
}
