import { renderHook, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";

import { useGetDistricts } from "./useGetDistricts";
import { ServiceLocation } from "../service/service";

vi.mock("../service/service", () => ({
  ServiceLocation: {
    getDistrict: vi.fn(),
  },
}));

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
      mockDistricts as any
    );

    const { result } = renderHook(() =>
      useGetDistricts({ UF: "SP" })
    );

    expect(result.current.loading).toBeTruthy()

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(ServiceLocation.getDistrict).toHaveBeenCalledWith({
      UF: "SP",
    });

    expect(result.current.districts).toEqual(mockDistricts);
    expect(result.current.error).toBe("");
  });

  it("should handle API error", async () => {
    vi.mocked(ServiceLocation.getDistrict).mockRejectedValue(
      new Error("Erro na API")
    );

    const { result } = renderHook(() =>
      useGetDistricts({ UF: "SP" })
    );

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(result.current.error).toBe("Erro na API");
    expect(result.current.districts).toEqual([]);
  });

  it("should not call the API when UF is empty", () => {
    renderHook(() =>
      useGetDistricts({ UF: "" })
    );

    expect(ServiceLocation.getDistrict).not.toHaveBeenCalled();
  });

  it("should control the loading state", async () => {
    let resolvePromise: (value: any) => void;

    const promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    vi.mocked(ServiceLocation.getDistrict).mockReturnValue(
      promise as Promise<any>
    );

    const { result } = renderHook(() =>
      useGetDistricts({ UF: "RJ" })
    );

    expect(result.current.loading).toBe(true);

    resolvePromise!([]);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });
});