import type { Gender, Species } from "../common/types";
import type { NewPet } from "../registration/types";

export interface GetPetsListResponse extends NewPet {
  id: string;
  created_at: string;
}


export const GetPetsListResponseBuilder = (params: Partial<GetPetsListResponse>): GetPetsListResponse => ({
  size: params.size || "Pequeno",
  gender: params.gender || ("Macho" as Gender),
  species: params.species || ("Cachorro" as Species),
  temperament: params.temperament || [],
  neutered: params.neutered ?? false,
  vaccinated: params.vaccinated ?? false,
  dewormed: params.dewormed ?? false,
  state: params.state || "RJ",
  city: params.city || "Rio de Janeiro",
  breed: params.breed || "",
  age: params.age || "Filhote",
  name: params.name || "Milo",
  imageUrl: params.imageUrl || "https://pkhbxehiinafrryxxjdi.supabase.co/storage/v1/object/public/listing_pets/1783551115611-milo.jpg",
  user_id: params.user_id || "1234567",
  id: params.id || "21",
  created_at: params.created_at || "2026-07-08T22:51:54.230121+00:00"
});