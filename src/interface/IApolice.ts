export interface IApolice {
  id?: number
  numero: string;
  valor_premio: number;
  segurado: {
    nome: string;
    email: string;
    cpf_cnpj: string;
  }
  coberturas: {
    nome: string;
    valor: number;
  }[];
}