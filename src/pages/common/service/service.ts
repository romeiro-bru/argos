import axios from "axios";
import type { ApiResponse, DistrictResponse } from "../../registration/types";

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

async function getStates(): Promise<ApiResponse[]> {
  const url = "/estados";

  const response = await api.get(url);

  if (response.status !== 200) {
    throw new Error("Erro ao buscar dados de Estados.");
  }

  return response.data;
}

async function getDistrict({
  UF,
}: {
  UF: string;
}): Promise<DistrictResponse[]> {
  const url = `/estados/${UF}/distritos`;

  const response = await api.get(url);

  if (response.status !== 200) {
    throw new Error("Erro ao buscar dados de distritos.")
  }

  return response.data;
}

export const ServiceLocation = {
  getStates,
  getDistrict,
};
 