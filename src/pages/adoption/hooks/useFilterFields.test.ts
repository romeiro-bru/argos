import { renderHook } from "@testing-library/react";
import { useFilterFields } from "./useFilterfields";
import { act } from "react";

describe("useFilterFields", () => {
  describe("setField and Reset", () => {
    it("should return empty initial values", () => {
      const { result } = renderHook(() => useFilterFields());

      expect(result.current.filters).toEqual({
        species: "",
        age: "",
        size: "",
        city: "",
        state: "",
      });
    });

    it("should update a field", () => {
      const { result } = renderHook(() => useFilterFields());

      act(() => {
        result.current.setField("species", "Cachorro");
      });

      expect(result.current.filters.species).toBe("Cachorro");
    });

    it("should reset all fields", () => {
      const { result } = renderHook(() => useFilterFields());

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
      const { result } = renderHook(() => useFilterFields());

      act(() => {
        result.current.setField("species", "Cachorro");
      });

      expect(result.current.filteredList).toHaveLength(10);

      expect(result.current.filteredList[0]).toMatchObject({
        species: "Cachorro",
      });
    });

    it("should filter pets by species and size", () => {
      const { result } = renderHook(() => useFilterFields());

      act(() => {
        result.current.setField("species", "Cachorro");
        result.current.setField("size", "Médio");
      });

      expect(result.current.filteredList).toHaveLength(4);

      expect(result.current.filteredList[0]).toMatchObject({
        species: "Cachorro",
      });
      expect(result.current.filteredList[0]).toMatchObject({
        size: "Médio",
      });
    });

    it("should filter pets by species, size, age and state", () => {
      const { result } = renderHook(() => useFilterFields());

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
