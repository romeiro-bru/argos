import type { FormDataInterface } from "../signup";

export interface FormFieldProps {
  setFormData: React.Dispatch<React.SetStateAction<FormDataInterface>>;
  formData: FormDataInterface;
}
