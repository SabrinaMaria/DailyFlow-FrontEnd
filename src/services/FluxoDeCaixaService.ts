import api from '../services/api';
import { formataDatasQuery } from '../utils/Functions';

export interface IFluxo {
    id: number;
    receita: boolean;
    data: string;
    valor: number;
    descricao: string;
    createdAt: Date;
    updatedAt: Date;
    espaco_id: number;
    propriedade_id: number;
}

const getRegistrosFluxo = async (): Promise<IFluxo[] | undefined> => {
    try {
        const { data } = await api.get<IFluxo[]>(`fluxos`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

const getRegistroById = async (id: number): Promise<IFluxo | undefined> => {
    try {
        const { data } = await api.get<IFluxo>(`fluxo/${id}`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

const updateRegistroFluxo = async (id: number, entidadePai: number, tipo: number, valor: string, descricao: string, dataRegistro: string): Promise<IFluxo | undefined> => {
    try {
        const { data } = await api.put<IFluxo>(`fluxo_caixa/propriedade/${entidadePai == 1 ? 1 : 0}/espaco/${entidadePai == 2 ? 1 : 0}/fluxo/${id}?receita=${tipo == 1 ? true : false}&valor=${valor}&descricao=${descricao}&data=${formataDatasQuery(dataRegistro)}`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

const createRegistroFluxo = async (entidadePai: number, tipo: number, valor: string, descricao: string, dataRegistro: string): Promise<IFluxo | undefined> => {
    try {
        const { data } = await api.post<IFluxo>(`fluxo_caixa/propriedade/${entidadePai == 1 ? 1 : 0}/espaco/${entidadePai == 2 ? 1 : 0}?receita=${tipo == 1 ? true : false}&valor=${valor}&descricao=${descricao}&data=${formataDatasQuery(dataRegistro)}`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

const deleteRegistroFluxo = async (id: number): Promise<IFluxo | undefined> => {
    try {
        const { data } = await api.delete<IFluxo>(`fluxo/${id}`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

export const FluxoDeCaixaService = {
    getRegistroById,
    updateRegistroFluxo,
    createRegistroFluxo,
    getRegistrosFluxo,
    deleteRegistroFluxo
  };