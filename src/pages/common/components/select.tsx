interface SelectProps {
  label: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function Select({ label, options, onChange, disabled }: SelectProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <label className="font-semibold" htmlFor={label}>
        {label}
      </label>
      <select
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        id={label}
        className={`text-sm ${disabled ? "text-gray-300! cursor-not-allowed" : ""}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
