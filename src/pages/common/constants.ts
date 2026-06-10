import type { ApiResponse } from "../registration/types";
import type { DistrictResponse } from "./service/types";

export const stateOptions = (states: ApiResponse[]) =>
  states
    .sort((a, b) => a.sigla.localeCompare(b.sigla))
    .map((state) => {
      const label = `${state.sigla} - ${state.nome}`;
      const value = state.sigla;

      return { label, value };
    });

export const districtsOptions = (districts: DistrictResponse[]) =>
  Array.from(new Map(districts.map((d) => [d.nome, d])).values()) // Map usa d.nome como chave para eliminar duplicatas, depois converte de volta para array
    .sort((a, b) => a.nome.localeCompare(b.nome))
    .map((district) => {
      const label = district.nome;
      const value = district.nome;

      return { label, value };
    });
