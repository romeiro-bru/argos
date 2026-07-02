interface NameInputFieldProps {
  onChange: (value: string) => void;
  onBlur?: () => {};
  error?: string;
}

export function NameInputField({
  onChange,
  onBlur,
  error,
}: NameInputFieldProps) {
  return (
    <fieldset>
      <label className="flex flex-col mb-2 font-semibold" htmlFor="name">
        Nome do pet para adoção:
      </label>
      <input
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        type="text"
        id="name"
        className="p-2 rounded-lg text-sm w-full"
      />
      <span className="text-[var(--error)] italic text-xs min-h-[1rem] block mt-1">
        {error}
      </span>
    </fieldset>
  );
}
