export function NameInputField() {
  return (
    <fieldset>
      <label className="flex flex-col mb-2 font-semibold" htmlFor="name">
        Nome do pet para adoção:
      </label>
      <input type="text" id="name" className="p-2 rounded-lg text-sm w-full" />
    </fieldset>
  );
}
