import dogsBreed from "../../dogsBreed.json";
import catsBreed from "../../catsBreed.json";

export const dogBreeds = dogsBreed.map((breed) => {
  const label = breed.name;
  const value = breed.name;

  return { label, value };
});

export const catBreeds = catsBreed.map((breed) => {
  const label = breed.name;
  const value = breed.name;

  return { label, value };
});
