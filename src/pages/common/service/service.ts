import axios from "axios";
import type { DistrictResponse, StatesResponse } from "./types";

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

async function getStates(): Promise<StatesResponse[]> {
  const url = "/estados";

  const response = await api.get(url);

  return response.data;
}

async function getDistrict({
  UF,
}: {
  UF: string;
}): Promise<DistrictResponse[]> {
  const url = `/estados/${UF}/distritos`;

  const response = await api.get(url);

  return response.data;
}

export const ServiceLocation = {
  getStates,
  getDistrict,
};
 