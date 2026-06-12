import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

vi.mock("./hooks/useFilterfields", () => ({
  useFilterFields: vi.fn(),
}));

import Home from "./home";
import { useFilterFields } from "./hooks/useFilterfields";

const mockedUseFilterFields = vi.mocked(useFilterFields);

describe("Home Page", () => {
  beforeEach(() => {
    mockedUseFilterFields.mockReset();
  });

  it("should render page title", () => {
    mockedUseFilterFields.mockReturnValue({
      filters: {
        species: "",
        age: "",
        size: "",
        city: "",
        state: "",
      },
      setField: vi.fn(),
      reset: vi.fn(),
      filteredList: [],
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: /aumigos disponíveis para adoção/i,
      }),
    ).toBeInTheDocument();
  });

  it("should render all inputs", () => {
    mockedUseFilterFields.mockReturnValue({
      filters: {
        species: "Cachorro",
        age: "",
        size: "",
        city: "",
        state: "",
      },
      setField: vi.fn(),
      reset: vi.fn(),
      filteredList: [],
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByText("Espécie:")).toBeInTheDocument();
    expect(screen.getByText("Porte:")).toBeInTheDocument();
    expect(screen.getByText("Idade:")).toBeInTheDocument();
    expect(screen.getByText("Estado:")).toBeInTheDocument();
    expect(screen.getByText("Cidade:")).toBeInTheDocument();
  });

  it("should not render field 'Porte' when 'Gato' is selected", () => {
    mockedUseFilterFields.mockReturnValue({
      filters: {
        species: "Gato",
        age: "",
        size: "",
        city: "",
        state: "",
      },
      setField: vi.fn(),
      reset: vi.fn(),
      filteredList: [],
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.queryByText("Porte:")).not.toBeInTheDocument();
  });
});
