interface SelectProps {
  label: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export function Select({ label, options, onChange }: SelectProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <label className="font-semibold" htmlFor="state">
        {label}
      </label>
      <select onChange={(e) => onChange(e.target.value)} id="state" className="text-sm">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </fieldset>
  );
}
