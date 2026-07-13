import type { GetPetsListResponse } from "../adoption/types";
import { foundFavorites } from "./favorites";

const list: GetPetsListResponse[] = [
  {
    id: "12",
    name: "Argos",
    gender: "Macho",
    age: "Filhote",
    size: "Pequeno",
    breed: "SRD",
    city: "Rio de Janeiro",
    state: "Rio de Janeiro",
    imageUrl: "",
    dewormed: true,
    neutered: true,
    species: "Cachorro",
    temperament: [],
    vaccinated: true,
    created_at: "",
    user_id: "",
  },
  {
    id: "2",
    name: "Mel",
    gender: "Fêmea",
    age: "Adulto",
    size: "Médio",
    breed: "SRD",
    city: "Rio de Janeiro",
    state: "Rio de Janeiro",
    imageUrl: "",
    dewormed: true,
    neutered: true,
    species: "Cachorro",
    temperament: [],
    vaccinated: true,
    created_at: "",
    user_id: "",
  },
];

describe("Found Favorites", () => {
  it("Should return saved items correctly", () => {
    const favorites = [
      {
        id: "12",
        name: " Argos",
      },
    ];

    const expectedResult = [list[0]];

    expect(foundFavorites(list, favorites)).toEqual(expectedResult);
  });

  it("Should return empty array when the are no favorites", () => {
    expect(foundFavorites(list, [])).toEqual([]);
  });

  it("Should return empty array when favorites do not exist in list", () => {
    const favorites = [{ id: "999", name: "Ghost" }];

    expect(foundFavorites(list, favorites)).toEqual([]);
  });

  it("Should return multiple matched favorites", () => {
    const favorites = [
      { id: "12", name: "Argos" },
      { id: "2", name: "Mel" },
    ];

    const expected = [list[0], list[1]];

    expect(foundFavorites(list, favorites)).toEqual(expected);
  });

  it("Should handle duplicate favorite ids", () => {
    const favorites = [
      { id: "12", name: "Argos" },
      { id: "12", name: "Argos" },
    ];

    const expected = [list[0]];

    expect(foundFavorites(list, favorites)).toEqual(expected);
  });
});
