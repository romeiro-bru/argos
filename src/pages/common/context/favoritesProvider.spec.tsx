import type React from "react";
import { FavoritesContext, FavoritesProvider } from "./favoritesProvider";
import { act, useContext } from "react";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";

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

function Component() {
  const context = useContext(FavoritesContext);
  if (!context) return null;
  return (
    <>
      <button
        onClick={() => context.toggleFavorite({ id: "1", name: "Argos" })}
      >
        toggle
      </button>
      <span data-testid="count">{context.favorites.length}</span>
    </>
  );
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
});
