interface NameInputFieldProps {
  onChange: (value: string) => void;
}

export function NameInputField({ onChange }: NameInputFieldProps) {
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
    </fieldset>
  );
}
