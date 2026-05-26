import dogsBreed from "../../dogsBreed.json";

export const temper = [...new Set(dogsBreed.flatMap((b) => b.temperament))]