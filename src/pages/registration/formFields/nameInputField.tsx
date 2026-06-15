interface NameInputFieldProps {
  onChange: (value: string) => void;
  error?: string;
}

export function NameInputField({ onChange, error }: NameInputFieldProps) {
  return (
    <fieldset>
      <label className="flex flex-col mb-2 font-semibold" htmlFor="name">
        Nome do pet para adoção:
      </label>
      <input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        id="name"
        className="p-2 rounded-lg text-sm w-full"
      />
      <span className="text-[var(--error)] italic text-xs">{error}</span>
    </fieldset>
  );
}
