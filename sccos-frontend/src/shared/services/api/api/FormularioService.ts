import { Environment } from "../../../environment";
import { Api } from "../axios-config";

export interface IFormulario {
  id: number;
  idServico: IServico;
  nomeOS: string;
  nivel: number;
  datahorasolicitacao: string;
  realizada: boolean;
  descricao: string;
  local: string;
  created_at: string;
  updated_at: string;
}

export interface IServico {
  id: number;
  nome: string;
  tipo: string;
  created_at: string;
  updated_at: string;
}

type TFormularioCount = {
  data: IFormulario[];
  totalCount: number;
};

const getAll = async (): Promise<TFormularioCount | Error> => {
  try {
    const { data, headers } = await Api.get(`/api/buscar/formulario`);
    if (data) {
      return {
        data,
        totalCount: Number(
          headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }

    return new Error("Erro ao listar as ordens de serviço");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao listar as ordens de serviço"
    );
  }
};

const getFormularioNResolvido = async (filter = ""): Promise<any> => {
  try {
    const { data, headers } = await Api.get(`/api/buscar/formulario${filter}`);
    if (data) {
      return {
        data,
        totalCount: Number(
          headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }

    return new Error("Erro ao listar as ordens de serviço");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao listar as ordens de serviço"
    );
  }
};
const getFormularioResolvido = async (filter = ""): Promise<any> => {
  try {
    const { data, headers } = await Api.get(`/api/buscar/formulario${filter}`);
    if (data) {
      return {
        data,
        totalCount: Number(
          headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }

    return new Error("Erro ao listar as ordens de serviço");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao listar as ordens de serviço"
    );
  }
};
const getFormularioPorServidor = async (filter = ""): Promise<any> => {
  try {
    const { data, headers } = await Api.get(`/api/buscar/formulario${filter}`);
    if (data) {
      return {
        data,
        totalCount: Number(
          headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }

    return new Error("Erro ao listar as ordens de serviço");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao listar as ordens de serviço"
    );
  }
};
const getById = async (id: number): Promise<TFormularioCount | Error> => {
  try {
    const { data } = await Api.get(`/api/buscar/formulario${id}`);
    if (data) {
      return data;
    }

    return new Error("Erro ao consultar a ordens de serviço");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao listar as ordens de serviço"
    );
  }
};
const create = async (
  dados: Omit<IFormulario, "id">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IFormulario>(
      "/api/cadastro/formulario",
      dados
    );
    if (data) {
      return data.id;
    }

    return new Error("Erro ao criar a ordens de serviço");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao criar as ordens de serviço"
    );
  }
};
const detele = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/api/deletar/formulario/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao apagar a ordem de serviço"
    );
  }
};
const update = async (
  id: number,
  dados: IFormulario
): Promise<void | Error> => {
  try {
    await Api.put(`/api/atualizar/formulario/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao atuliazar a ordem de serviço"
    );
  }
};

export const FormularioService = {
  getAll,
  getFormularioNResolvido,
  getFormularioResolvido,
  getFormularioPorServidor,
  create,
  detele,
  update,
  getById,
};
