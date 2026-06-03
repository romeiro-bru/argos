import { vi, describe, it, expect, beforeEach } from "vitest";
import { ServiceLocation } from "../service/service";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetStates } from "./useGetStates";

vi.mock("../service/service", () => ({
  ServiceLocation: {
    getStates: vi.fn(),
  },
}));

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

    const { result } = renderHook(() => useGetStates());

    expect(result.current.loading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(result.current.states).toEqual(mockStates);
  });

  it("should handle API error", async () => {
    vi.mocked(ServiceLocation.getStates).mockRejectedValue(
      new Error("Erro na API"),
    );

    const { result } = renderHook(() => useGetStates());

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(result.current.error).toBe("Erro na API");
    expect(result.current.states).toEqual([]);
  });

  it("should control the loading state", async () => {
    let resolvePromise: (value: any) => void;

    const promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    vi.mocked(ServiceLocation.getStates).mockReturnValue(promise as any);

    const { result } = renderHook(() => useGetStates());
    expect(result.current.loading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.loading).toBeTruthy();
    });
  });
});
