export interface DistrictResponse {
  id: number;
  nome: string;
  municipoio: {
    id: number;
    nome: string;
  };
}
