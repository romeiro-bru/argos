import { Upload } from "../../../../assets/upload";
import type { FormState } from "../../types";

interface FieldProps {
  setField: (file: File | null) => void;
  errors: Partial<Record<keyof FormState, string>>;
  formState: FormState;
  validateForm: () => boolean;
}

export function UploadImageField({
  setField,
  validateForm,
  formState,
  errors,
}: FieldProps) {
  return (
    <div>
      <label className="font-semibold">Imagem:</label>
      <input
        id="f2"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => setField(e.target.files?.[0] ?? null)}
        onBlur={validateForm}
      />
      <label
        htmlFor="f2"
        className="flex items-center gap-2 cursor-pointer p-2 bg-[var(--bg) shadow-md rounded-lg hover:opacity-80 transition-opacity"
      >
        <Upload />
        Escolher imagem
        {formState.fileName && (
          <span className="text-xs italic text-[var(--gray)] px-2">
            ✓ {formState.fileName}
          </span>
        )}
      </label>
      <span className="text-[var(--error)] italic text-xs min-h-[1rem] block mt-1">
        {errors.fileName}
      </span>
    </div>
  );
}
