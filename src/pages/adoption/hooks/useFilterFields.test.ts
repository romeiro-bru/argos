import { renderHook } from "@testing-library/react";
import { useFilterFields } from "./useFilterfields";
import { act } from "react";
import type { GetPetsListResponse } from "../types";

const petMock: GetPetsListResponse[] = [
  {
    size: "Pequeno",
    gender: "Macho",
    species: "Cachorro",
    temperament: [],
    neutered: true,
    vaccinated: false,
    dewormed: false,
    state: "RJ",
    city: "Rio de Janeiro",
    breed: "",
    age: "Jovem",
    name: "Bob",
    id: "234567890",
    created_at: "",
    imageUrl: "",
    user_id: "1",
  },
  {
    size: "Médio",
    gender: "Fêmea",
    species: "Cachorro",
    temperament: [],
    neutered: true,
    vaccinated: false,
    dewormed: false,
    state: "RJ",
    city: "Rio de Janeiro",
    breed: "SRD",
    age: "Jovem",
    name: "Nina",
    id: "234567rtyui",
    created_at: "",
    imageUrl: "",
    user_id: "1",
  },
   {
    size: "Médio",
    gender: "Fêmea",
    species: "Cachorro",
    temperament: [],
    neutered: false,
    vaccinated: false,
    dewormed: false,
    state: "RJ",
    city: "Rio de Janeiro",
    breed: "SRD",
    age: "Jovem",
    name: "Lola",
    id: "234s23rtyui",
    created_at: "",
    imageUrl: "",
    user_id: "2",
  },
];

describe("useFilterFields", () => {
  describe("setField and Reset", () => {
    it("should return empty initial values", () => {
      const { result } = renderHook(() => useFilterFields({ pets: petMock }));

      expect(result.current.filters).toEqual({
        species: "",
        age: "",
        size: "",
        city: "",
        state: "",
      });
    });

    it("should update a field", () => {
      const { result } = renderHook(() => useFilterFields({ pets: petMock }));

      act(() => {
        result.current.setField("species", "Cachorro");
      });

      expect(result.current.filters.species).toBe("Cachorro");
    });

    it("should reset all fields", () => {
      const { result } = renderHook(() => useFilterFields({ pets: petMock }));
      act(() => {
        result.current.setField("species", "Cachorro");
        result.current.setField("city", "Rio de Janeiro");
      });

      act(() => {
        result.current.reset();
      });

      expect(result.current.filters).toEqual({
        species: "",
        age: "",
        size: "",
        city: "",
        state: "",
      });
    });
  });

  describe("filteredList", () => {
    it("should filter pets by species", () => {
      const { result } = renderHook(() => useFilterFields({ pets: petMock }));

      act(() => {
        result.current.setField("species", "Cachorro");
      });

      expect(result.current.filteredList).toHaveLength(3);

      expect(result.current.filteredList[0]).toMatchObject({
        species: "Cachorro",
      });
    });

    it("should filter pets by species and size", () => {
      const { result } = renderHook(() => useFilterFields({ pets: petMock }));

      act(() => {
        result.current.setField("species", "Cachorro");
        result.current.setField("size", "Médio");
      });

      expect(result.current.filteredList).toHaveLength(2);

      expect(result.current.filteredList[0]).toMatchObject({
        species: "Cachorro",
      });
      expect(result.current.filteredList[0]).toMatchObject({
        size: "Médio",
      });
    });

    it("should filter pets by species, size, age and state", () => {
      const { result } = renderHook(() => useFilterFields({ pets: petMock }));

      act(() => {
        result.current.setField("species", "Cachorro");
        result.current.setField("size", "Médio");
        result.current.setField("age", "Jovem");
        result.current.setField("state", "RJ");
      });

      expect(result.current.filteredList).toHaveLength(2);

      expect(result.current.filteredList[0]).toMatchObject({
        species: "Cachorro",
      });
      expect(result.current.filteredList[0]).toMatchObject({
        size: "Médio",
      });
    });
  });
});
