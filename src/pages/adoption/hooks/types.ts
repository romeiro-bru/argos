import type { Age, Size, Species } from "../../common/types";

export interface FiltersValue {
  species: Species | "";
  age: Age | "";
  size: Size | "";
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
