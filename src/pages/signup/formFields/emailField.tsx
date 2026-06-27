import type { FormFieldProps } from "./types";

export function EmailField({ setFormData, formData }: FormFieldProps) {
  return (
    <div>
      <label className="flex flex-col mb-2 font-semibold" htmlFor="email">
        E-mail:
      </label>
      <input
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        type="email"
        id="email"
        className="p-2 rounded-lg text-sm w-full"
        required
      />
    </div>
  );
}
