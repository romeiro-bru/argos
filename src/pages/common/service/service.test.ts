import axios from "axios";
import { ServiceLocation } from "./service";
import { vi } from "vitest";

const mockStatesResponse = [
  {
    id: 33,
    sigla: "RJ",
    nome: "Rio de Janeiro",
    regiao: { id: 3, sigla: "SE", nome: "Sudeste" },
  },
  {
    id: 35,
    sigla: "SP",
    nome: "São Paulo",
    regiao: { id: 3, sigla: "SE", nome: "Sudeste" },
  },
];

const mockDistrictsResponse = [
  {
    id: 330010005,
    nome: "Angra dos Reis",
    municipio: {
      id: 3300100,
      nome: "Angra dos Reis",
      microrregiao: {
        id: 33013,
        nome: "Baía da Ilha Grande",
        mesorregiao: {
          id: 3305,
          nome: "Sul Fluminense",
          UF: {
            id: 33,
            sigla: "RJ",
            nome: "Rio de Janeiro",
            regiao: {
              id: 3,
              sigla: "SE",
              nome: "Sudeste",
            },
          },
        },
      },
    },
  },
];

vi.mock("axios", () => {
  const mockGet = vi.fn();
  return {
    default: {
      create: () => ({ get: mockGet }),
    },
  };
});
const mockGet = (axios.create() as any).get;

describe("ServiceLocation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getStates", () => {
    it("should fetch states successfully", async () => {
      // arrange
      mockGet.mockResolvedValueOnce({
        status: 200,
        data: mockStatesResponse,
      });
      // act
      const result = await ServiceLocation.getStates();

      // assert
      expect(result).toEqual(mockStatesResponse);
    });

    it("should call correct url", async () => {
      // arrange
      mockGet.mockResolvedValueOnce({
        status: 200,
        data: mockStatesResponse,
      });

      // act
      await ServiceLocation.getStates();

      // assert
      expect(mockGet).toHaveBeenCalledWith("/estados");
      expect(mockGet).toHaveBeenCalledTimes(1);
    });

    it("should throw an error when API call fails", async () => {
      mockGet.mockResolvedValueOnce({
        status: 500,
        data: null,
      });

      await expect(ServiceLocation.getStates()).rejects.toThrow(
        "Erro ao buscar dados de Estados.",
      );
    });
  });

  describe("getDistrict", () => {
    const UF = "RJ";

    it("should fetch districts successfully", async () => {
      mockGet.mockResolvedValueOnce({
        status: 200,
        data: mockDistrictsResponse,
      });

      const result = await ServiceLocation.getDistrict({ UF });

      expect(result).toEqual(mockDistrictsResponse);
    });

    it("should call correct url", async () => {
      mockGet.mockResolvedValueOnce({
        status: 200,
        data: mockDistrictsResponse,
      });

      await ServiceLocation.getDistrict({ UF });

      expect(mockGet).toHaveBeenCalledWith(`/estados/${UF}/distritos`);
      expect(mockGet).toHaveBeenCalledTimes(1);
    });

    it("should throw an error when API call fails", async () => {
      mockGet.mockResolvedValueOnce({
        status: 400,
        data: null,
      });

      await ServiceLocation.getDistrict({ UF }).catch((error) => {
        expect(error).toEqual(new Error("Erro ao buscar dados de distritos."));
      });
    });
  });
});
