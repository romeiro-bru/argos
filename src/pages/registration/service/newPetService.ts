import { supabase } from "../../../../supabase-client";
import type { NewPet } from "../types";

interface NewPetServiceParams {
  pet: NewPet;
}

export async function uploadPetImage(file: File): Promise<string> {
  // envia somente imagem para bucket e retorna a url da imagem
  const { data, error } = await supabase.storage
    .from("listing_pets")
    .upload(`${Date.now()}-${file.name}`, file, {
      contentType: file.type,
    });

  if (error) throw error;

  // retorna url da imagem enviada para bucket no supabase
  const { data: publicUrlData } = supabase.storage
    .from("listing_pets")
    .getPublicUrl(data.path);

  return publicUrlData.publicUrl;
}

export async function newPetService({ pet }: NewPetServiceParams) {
  return supabase.from("new-pets").insert(pet).single();
}