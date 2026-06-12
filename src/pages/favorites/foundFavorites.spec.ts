import type { PetsList } from "../common/types";
import { foundFavorites } from "./favorites";

const list: PetsList[] = [
  {
    id: "1",
    name: "Argos",
    gender: "Macho",
    age: "Filhote",
    size: "Pequeno",
    breed: "SRD",
    city: "Rio de Janeiro",
    state: "Rio de Janeiro",
    img: "../../../public/0999.jpeg",
    dewormed: true,
    neutered: true,
    species: "Cachorro",
    temperament: [],
    vaccinated: true,
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
    img: "../../../public/16ff6543.jpg",
    dewormed: true,
    neutered: true,
    species: "Cachorro",
    temperament: [],
    vaccinated: true,
  },
];

describe("Found Favorites", () => {
  it("Should return saved items correctly", () => {
    const favorites = [
      {
        id: "1",
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
      { id: "1", name: "Argos" },
      { id: "2", name: "Mel" },
    ];

    const expected = [list[0], list[1]];

    expect(foundFavorites(list, favorites)).toEqual(expected);
  });

  it("Should handle duplicate favorite ids", () => {
    const favorites = [
      { id: "1", name: "Argos" },
      { id: "1", name: "Argos" },
    ];

    const expected = [list[0]];

    expect(foundFavorites(list, favorites)).toEqual(expected);
  });
});
