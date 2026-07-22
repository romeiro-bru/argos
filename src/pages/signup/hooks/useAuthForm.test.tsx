import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { service } from "../service/useSignup";
import { renderHook,waitFor } from "@testing-library/react";
import { useAuthForm } from "./useAuthForm";
import { MemoryRouter } from "react-router-dom";
import { act } from "react";
import type { AuthTokenResponsePassword } from "@supabase/supabase-js";

vi.mock("../service/useSignup", () => ({
  service: {
    loginUser: vi.fn(),
    signupUser: vi.fn(),
  },
}));
vi.mock("../../../context/userSupabaseContext", () => ({
  useUserSupabase: () => ({ session: null }),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // evita retries automáticos nos testes
    },
  },
});
function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
}

describe("useAuthForm", () => {
  //   let mockNavigate: Mock;

  it("should start with mode as signup and empty formdata", () => {
    const { result } = renderHook(() => useAuthForm(), {
      wrapper: Wrapper,
    });

    expect(result.current.formData).toEqual({
      email: "",
      name: "",
      password: "",
    });
    expect(result.current.mode).toBe("signup");
    expect(result.current.isSuccess).toBeFalsy();
    expect(result.current.showError).toBeFalsy();
  });

  it("should create account successfully", async () => {
    const mock = {
      data: {
        user: null,
        session: null,
      },
      error: null,
    };

    vi.mocked(service.signupUser).mockResolvedValue(mock);

    const { result } = renderHook(() => useAuthForm(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.setFormData({
        name: "Bruna",
        email: "bruna@email.com",
        password: "123456",
      });
    });

    await act(async () => {
      result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent);
    });

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(result.current.mode).toBe("signup");
    expect(result.current.isSuccess).toBeTruthy();
  });

  it("should login successfully", async () => {
    const mock = {
      data: { user: null, session: null },
      error: null,
    } as unknown as AuthTokenResponsePassword;

    vi.mocked(service.loginUser).mockResolvedValue(mock);

    const { result } = renderHook(() => useAuthForm(), { wrapper: Wrapper });

    act(() => {
      result.current.toggleMode(); // muda pra "login"
    });

    act(() => {
      result.current.setFormData({
        name: "B",
        email: "bruna@email.com",
        password: "123456",
      });
    });

    await act(async () => {
      result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent);
    });

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(result.current.mode).toBe("login");
    expect(result.current.isSuccess).toBeTruthy();
    expect(service.loginUser).toHaveBeenCalledWith("bruna@email.com", "123456");
  });
});
