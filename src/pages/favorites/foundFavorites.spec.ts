import type { PetsList } from "../home/types";
import { foundFavorites } from "./favorites";

const list: PetsList[] = [
  {
    id: "1",
    name: "Argos",
    genre: "macho",
    age: "Filhote",
    size: "pequeno",
    breed: "SRD",
    cidade: "Rio de Janeiro",
    estado: "Rio de Janeiro",
    img: "../../../public/0999.jpeg",
  },
  {
    id: "2",
    name: "Mel",
    genre: "fêmea",
    age: "Adulto",
    size: "médio",
    breed: "SRD",
    cidade: "Rio de Janeiro",
    estado: "Rio de Janeiro",
    img: "../../../public/16ff6543.jpg",
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
});
