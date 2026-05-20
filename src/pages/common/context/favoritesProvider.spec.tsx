import type React from "react";
import { FavoritesContext, FavoritesProvider } from "./favoritesProvider";
import { useContext } from "react";
import { fireEvent, render, screen } from "@testing-library/react";

function renderProvider(children: React.ReactNode) {
  return renderProvider(<FavoritesProvider>{children}</FavoritesProvider>);
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
  it("Should add and remove favorite", () => {
    render(
      <FavoritesProvider>
        <Component />
      </FavoritesProvider>,
    );

    const button = screen.getByText("toggle");
    fireEvent.click(button);

    expect(screen.getByTestId("count").textContent).toBe("1");

    fireEvent.click(button);

    expect(screen.getByTestId("count").textContent).toBe("0");
  });
});
