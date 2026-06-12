import { act, render, screen } from "@testing-library/react";
import Registration from "./registration";
import { MemoryRouter } from "react-router-dom";

describe("Registration Page", () => {
  it("should render page title", () => {
    render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>,
    );
    expect(screen.getByText("Cadastre um pet para adoção")).toBeInTheDocument();
  });

  it("should render all fields and dogs breeds when 'Cachorro' is selected", () => {
    render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>,
    );

    expect(screen.getByRole("checkbox", { name: "Cachorro" })).toBeChecked();
    expect(
      screen.getByRole("combobox", { name: "Porte:" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Labrador Retriever" }),
    ).toBeInTheDocument();
  });

  it("should not render 'Porte' field and render cat breeds when 'Gato' is selected", () => {
    render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>,
    );

    act(() => {
      screen.getByRole("checkbox", { name: "Gato" }).click();
    });

    expect(screen.getByRole("checkbox", { name: "Gato" })).toBeChecked();
    expect(screen.getByRole("option", { name: "Persa" })).toBeInTheDocument();
    // getByRole lança erro se o elemento não for encontrado, por isso usamos queryByRole para verificar se o campo não está presente
    expect(
      screen.queryByRole("combobox", { name: "Porte:" }),
    ).not.toBeInTheDocument();
  });
});
