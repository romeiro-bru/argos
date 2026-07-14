import { renderHook, waitFor } from "@testing-library/react";
import { useGetPetsService } from "./useGetPetsService";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { service } from "../service/getPetsService";
import {
  GetPetsListResponseBuilder,
  type GetPetsListResponse,
} from "../../adoption/types";

vi.mock("../service/getPetsService", () => ({
  service: {
    getPets: vi.fn(),
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

const mock: GetPetsListResponse[] = [
  GetPetsListResponseBuilder({}),
  GetPetsListResponseBuilder({
    id: "23",
    name: "Mia",
  }),
  GetPetsListResponseBuilder({
    id: "24",
    name: "Nina",
  }),
];

describe("useGetPetsService", () => {
  it("Should return pets correctly", async () => {
    vi.mocked(service.getPets).mockResolvedValue(mock);

    const { result } = renderHook(() => useGetPetsService(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.pets).toEqual(mock);
    });
  });

  it("should return empty array when there are no pets", async () => {
    vi.mocked(service.getPets).mockResolvedValue([]);

    const { result } = renderHook(() => useGetPetsService(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });

    expect(result.current.pets).toEqual([]);
    expect(result.current.isError).toBeFalsy();
  });

  it("should handle api error", async () => {
    vi.mocked(service.getPets).mockRejectedValue("Erro na api.");

    const { result } = renderHook(() => useGetPetsService(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    });

    expect(result.current.isError).toBeTruthy();
    expect(result.current.error).toBe("Erro na api.");
  });
});
