import { renderHook, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";

import { useGetDistricts } from "./useGetDistricts";
import { ServiceLocation } from "../service/service";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("../service/service", () => ({
  ServiceLocation: {
    getDistrict: vi.fn(),
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

describe("useGetDistricts", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return districts successfully", async () => {
    const mockDistricts = [
      { id: 1, name: "Distrito A" },
      { id: 2, name: "Distrito B" },
    ];

    vi.mocked(ServiceLocation.getDistrict).mockResolvedValue(
      mockDistricts as any,
    );

    const { result } = renderHook(() => useGetDistricts({ UF: "SP" }), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });

    expect(ServiceLocation.getDistrict).toHaveBeenCalledWith({
      UF: "SP",
    });

    expect(result.current.data).toEqual(mockDistricts);
    expect(result.current.error).toBe(null);
  });

  it("should handle API error", async () => {
    vi.mocked(ServiceLocation.getDistrict).mockRejectedValue(
      new Error("Erro na API"),
    );

    const { result } = renderHook(() => useGetDistricts({ UF: "SP" }), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });

    expect(result.current.errorMessage).toBe("Erro na API");
    expect(result.current.data).toEqual([]);
  });

  it("should control the loading state", async () => {
    let resolvePromise: (value: any) => void;

    const promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    vi.mocked(ServiceLocation.getDistrict).mockReturnValue(
      promise as Promise<any>,
    );

    const { result } = renderHook(() => useGetDistricts({ UF: "RJ" }), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);

    resolvePromise!([]);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
  });

  
  it("should not fetch data when uf dos not exist", async () => {
    const mockDistricts = [
      { id: 1, name: "Distrito A" },
    ];

    vi.mocked(ServiceLocation.getDistrict).mockResolvedValue(
      mockDistricts as any,
    );

    const { result } = renderHook(() => useGetDistricts({ UF: "" }), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });

    expect(ServiceLocation.getDistrict).not.toHaveBeenCalled()
  });
});
