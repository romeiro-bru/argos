export interface DistrictResponse {
  id: number;
  nome: string;
  municipoio: {
    id: number;
    nome: string;
  };
}

export interface StatesResponse {
  id: number;
  sigla: string;
  nome: string;
  regiao?: {
    id: number;
    sigla: string;
    nome: string;
  };
}