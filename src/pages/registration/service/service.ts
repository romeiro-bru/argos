import axios from "axios";
import type { ApiResponse } from "../types";

const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

async function getStates(): Promise<ApiResponse[]> {
  const response = await axios.get(url);

  if (response.status !== 200) {
    throw new Error("Erro ao buscar dados de Estados.");
  }

  return response.data;
}

export const ServiceLocation = {
  getStates,
};
