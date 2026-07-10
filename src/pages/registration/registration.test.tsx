import { act, render, screen } from "@testing-library/react";
import Registration from "./registration";
import { MemoryRouter } from "react-router-dom";
import { appRoutes } from "../../routes";
import userEvent from "@testing-library/user-event";
import type { Session } from "@supabase/supabase-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function renderWithProviders(ui: React.ReactNode) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false }, // evita retries automáticos que podem travar o teste
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{ui}</MemoryRouter>
    </QueryClientProvider>,
  );
}
const mockNavigate = vi.fn();
const mockUseUserSupabase = vi.fn();

vi.mock(import("react-router-dom"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../../context/userSupabaseContext", () => ({
  useUserSupabase: () => mockUseUserSupabase(),
}));

vi.mock("../common/hooks/useGetStates", () => ({
  useGetStates: () => ({ states: [], loading: false }),
}));

vi.mock("../common/hooks/useGetDistricts", () => ({
  useGetDistricts: () => ({ districts: [], loading: false }),
}));

describe("Registration Page", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockUseUserSupabase.mockReturnValue({
      session: {
        user: { user_metadata: { name: "Teste" } },
      } as unknown as Session,
      userName: "Teste",
      isLoading: false,
    });
  });

  it("should render page title", () => {
    renderWithProviders(<Registration />);

    expect(screen.getByText("Cadastre um pet para adoção")).toBeInTheDocument();
  });

  it("should render all fields and dogs breeds when 'Cachorro' is selected", () => {
    renderWithProviders(<Registration />);

    expect(screen.getByRole("checkbox", { name: "Cachorro" })).toBeChecked();
    expect(
      screen.getByRole("combobox", { name: "Porte:" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Labrador Retriever" }),
    ).toBeInTheDocument();
  });

  it("should not render 'Porte' field and render cat breeds when 'Gato' is selected", () => {
    renderWithProviders(<Registration />);

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

  it("should navigate to adoption page when cancel button is clicked", async () => {
    renderWithProviders(<Registration />);

    await userEvent.click(screen.getByRole("button", { name: "cancelar" }));

    expect(mockNavigate).toHaveBeenCalledWith(appRoutes.ADOPTION.path);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
