import { supabase } from "../../../../supabase-client";
import type { FormState } from "../types";

interface NewPetServiceParams {
  pet: FormState;
}

export async function newPetService({ pet }: NewPetServiceParams) {
  return supabase.from("new-pets").insert(pet).single();
}
