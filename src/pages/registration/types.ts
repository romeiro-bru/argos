export interface ApiResponse {
  id: number;
  sigla: string;
  regiao?: {
    id: number;
    sigla: string;
    nome: string;
  };
}