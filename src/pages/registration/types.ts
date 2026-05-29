export interface ApiResponse {
  id: number;
  sigla: string;
  nome: string;
  regiao?: {
    id: number;
    sigla: string;
    nome: string;
  };
}

export interface DistrictResponse {
  id: number;
  nome: string;
  municipoio: {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
        id: number;
        nome: string;
        UF: {
          id: number;
          sigla: string;
          nome: string;
          regiao: {
            id: number;
            sigla: string;
            nome: string;
          };
        };
      };
    };
  };
}
