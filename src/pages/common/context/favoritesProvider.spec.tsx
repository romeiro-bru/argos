import type React from "react";
import { FavoritesContext, FavoritesProvider } from "./favoritesProvider";
import { act, useContext } from "react";
import { renderHook } from "@testing-library/react";

const providerWrapper = ({ children }: { children: React.ReactNode }) => {
  return <FavoritesProvider>{children}</FavoritesProvider>;
};

function useFavoritesTest() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("FavoritesContext not found");
  }

  return context;
}

describe("Favorites Provider", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("Should start with empty favorites", () => {
    const { result } = renderHook(() => useFavoritesTest(), {
      wrapper: providerWrapper,
    });

    expect(result.current.favorites).toEqual([]);
  });

  it("Should add favorite", () => {
    const { result } = renderHook(() => useFavoritesTest(), {
      wrapper: providerWrapper,
    });
    const item = {
      id: "1",
      name: "Argos",
    };

    act(() => {
      result.current.toggleFavorite(item);
    });

    expect(result.current.favorites).toEqual([item]);
  });

  it("Should remove favorite", () => {
    const { result } = renderHook(() => useFavoritesTest(), {
      wrapper: providerWrapper,
    });
    const item = {
      id: "1",
      name: "Argos",
    };
    act(() => {
      result.current.toggleFavorite(item);
    });
    act(() => {
      result.current.toggleFavorite(item);
    });

    expect(result.current.favorites).toEqual([]);
  });

  it("Should check if item is favorite", () => {
    const { result } = renderHook(() => useFavoritesTest(), {
      wrapper: providerWrapper,
    });
    const item = {
      id: "1",
      name: "Argos",
    };
    act(() => {
      result.current.toggleFavorite(item);
    });

    expect(result.current.isFavorite("1")).toBeTruthy();
    expect(result.current.isFavorite("234324")).toBeFalsy();
  });

  it("Should save favorites in localStorage", () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    const item = {
      id: "1",
      name: "Argos",
    };

    const { result } = renderHook(() => useFavoritesTest(), {
      wrapper: providerWrapper,
    });

    act(() => {
      result.current.toggleFavorite(item);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      "favoriteList",
      JSON.stringify([item]),
    );
  });

  it("Should load favorites from localStorage", () => {
    const item = {
      id: "1",
      name: "Argos",
    };

    vi.spyOn(Storage.prototype, "getItem").mockReturnValue(
      JSON.stringify([item]),
    );

    const { result } = renderHook(() => useFavoritesTest(), {
      wrapper: providerWrapper,
    });

    expect(result.current.favorites).toEqual([item]);
  });
});
