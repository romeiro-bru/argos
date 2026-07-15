import { vi, describe, it, expect, beforeEach } from "vitest";
import { ServiceLocation } from "../service/service";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetStates } from "./useGetStates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("../service/service", () => ({
  ServiceLocation: {
    getStates: vi.fn(),
  },
}));

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // evita retries automáticos nos testes
      },
    },
  });

  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
}

describe("useGetStates", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return states successfully", async () => {
    const mockStates = [
      { id: 1, nome: "São Paulo", sigla: "SP" },
      { id: 2, nome: "Rio de Janeiro", sigla: "RJ" },
    ];

    vi.mocked(ServiceLocation.getStates).mockResolvedValue(mockStates as any);

    const { result } = renderHook(() => useGetStates(), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });

    expect(result.current.data).toEqual(mockStates);
  });

  it("should handle API error", async () => {
    vi.mocked(ServiceLocation.getStates).mockRejectedValue(
      new Error("Erro na API"),
    );

    const { result } = renderHook(() => useGetStates(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });

    expect(result.current.errorMessage).toBe("Erro na API");
    expect(result.current.data).toEqual([]);
  });
});
