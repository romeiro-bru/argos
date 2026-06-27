import type { FormFieldProps } from "./types";

export function PasswordField({
  setFormData,
  formData,
  loading,
}: FormFieldProps) {
  return (
    <div>
      <label className="flex flex-col mb-2 font-semibold" htmlFor="password">
        Senha:
      </label>
      <input
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        type="password"
        id="password"
        minLength={6}
        className="p-2 rounded-lg text-sm w-full"
        required
        disabled={loading}
      />
    </div>
  );
}
