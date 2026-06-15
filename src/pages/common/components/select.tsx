interface SelectProps {
  label: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  disabled?: boolean;
  className?: string;
  error?: string;
}

export function Select({
  label,
  options,
  onChange,
  disabled,
  className,
  error,
  onBlur
}: SelectProps) {
  return (
    <fieldset className={`flex flex-col gap-2 ${className}`}>
      <label
        className={`${disabled ? "text-[var(--gray)]" : ""} font-semibold`}
        htmlFor={label}
      >
        {label}
      </label>
      <select
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        id={label}
        className={`text-sm ${disabled ? "text-[var(--gray)]! cursor-not-allowed" : ""}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="text-[var(--error)] italic text-xs min-h-[1rem] block mt-1">{error}</span>
    </fieldset>
  );
}
