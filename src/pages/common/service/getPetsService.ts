import { supabase } from "../../../../supabase-client";
import type { GetPetsListResponse } from "../../adoption/types";

async function getPets(): Promise<GetPetsListResponse[]> {
  const { data, error } = await supabase.from("new-pets").select("*");

  if (error) throw error;

  return data;
}

export const service = {
  getPets,
};
