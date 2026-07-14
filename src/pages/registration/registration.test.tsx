import { render, screen } from "@testing-library/react";
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
        user: { 
          id: "12345",
          user_metadata: { name: "Teste" } },
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

  it("should navigate to adoption page when cancel button is clicked", async () => {
    renderWithProviders(<Registration />);

    await userEvent.click(screen.getByRole("button", { name: "cancelar" }));

    expect(mockNavigate).toHaveBeenCalledWith(appRoutes.ADOPTION.path);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  describe("Use not authenticated", () => {
    beforeEach(() => {
      vi.clearAllMocks();
      mockUseUserSupabase.mockReturnValue({
        session: {
          user: { user_metadata: { name: null } },
        } as unknown as Session,
        userName: "Teste",
        isLoading: false,
      });
    });

    it("should render UserNotAllowed when there is no session", () => {
      mockUseUserSupabase.mockReturnValue({
        session: null,
        userName: "",
        isLoading: false,
      });

      renderWithProviders(<Registration />);

      // ajuste o texto/role conforme o que o UserNotAllowed realmente renderiza
      expect(screen.getByText(/Usuário não autenticado/i)).toBeInTheDocument();
      expect(
        screen.getByText(
          /É necessário estar logado na plataforma para cadastrar um animal para adoção./i,
        ),
      ).toBeInTheDocument();

      // garante que o formulário de cadastro NÃO aparece
      expect(
        screen.queryByText("Cadastre um pet para adoção"),
      ).not.toBeInTheDocument();
    });
  });
});
