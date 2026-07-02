export interface FiltersValue {
  species: string;
  age: string;
  size: string;
  city: string;
  state: string;
}

export type FiltersAction =
  | {
      type: "SET_FIELD";
      field: keyof FiltersValue;
      value: string;
    }
  | { type: "RESET" };
