import { supabase } from "../../../../supabase-client";
import type { FormState } from "../types";

interface NewPetServiceParams {
  pet: FormState;
}

export async function newPetService({ pet }: NewPetServiceParams) {
  const { data, error } = await supabase.from("new-pets").insert(pet).single();
  if (error) throw error;
  return data;
}
