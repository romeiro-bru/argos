import type { FormFieldProps } from "./types";

export function NameField({ setFormData, formData, loading }: FormFieldProps) {
  return (
    <div>
      <label className="flex flex-col mb-2 font-semibold" htmlFor="name">
        Nome:
      </label>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        type="text"
        id="name"
        className="p-2 rounded-lg text-sm w-full"
        required
        disabled={loading}
      />
    </div>
  );
}
