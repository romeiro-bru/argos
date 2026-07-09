import type { NewPet } from "../registration/types";

export interface GetPetsListResponse extends NewPet {
  id: string;
  created_at: string;
}
