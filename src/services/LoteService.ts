import api from '../services/api';
import { formataDatasQuery } from '../utils/Functions';

export interface ILote {
    id: number;
    perdas_no_transporte: number;
    data_recebimento: Date;
    previsao_entrega: Date;
    data_entrega: Date;
    tamanho_previsto: number;
    tamanho_efetivo: number;
    peso_entrada: number;
    racao_inicial: Date;
    racao_c1: Date;
    racao_c2: Date;
    racao_final: Date;
    inicio_horario_jejum: Date;
    createdAt: Date;
    updatedAt: Date;
    espaco_id: number;
    raca_id: number;
}

const getLotes = async (): Promise<ILote[] | undefined> => {
    try {
        const { data } = await api.get<ILote[]>(`lotes`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

const getLoteById = async (id: number): Promise<ILote | undefined> => {
    try {
        const { data } = await api.get<ILote>(`lotes/${id}`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

const updateLote = async (id: number, raca: number, perdasTransporte: string, dataRecebimento: string, previsaoEntrega: string, dataEntrega: string, tamanhoPrevisto: string, tamanhoEfetivo: string, pesoEntrada: string, racaoInicial: string, racaoC1: string, racaoC2: string, racaoFinal: string, inicioHrJejum: string): Promise<ILote | undefined> => {
    try {
        const { data } = await api.put<ILote>(`/raca/${raca}/espaco/1/lotes/${id}?perdas_no_transporte=${perdasTransporte}&data_recebimento=${formataDatasQuery(dataRecebimento)}&previsao_entrega=${formataDatasQuery(previsaoEntrega)}&data_entrega=${formataDatasQuery(dataEntrega)}&tamanho_previsto=${tamanhoPrevisto}&tamanho_efetivo=${tamanhoEfetivo}&peso_entrada=${pesoEntrada}&racao_inicial=${formataDatasQuery(racaoInicial)}&racao_c1=${formataDatasQuery(racaoC1)}&racao_c2=${formataDatasQuery(racaoC2)}&racao_final=${formataDatasQuery(racaoFinal)}&inicio_horario_jejum=${formataDatasQuery(inicioHrJejum)}`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

const createLote = async (raca: number, perdasTransporte: string, dataRecebimento: string, previsaoEntrega: string, dataEntrega: string, tamanhoPrevisto: string, tamanhoEfetivo: string, pesoEntrada: string, racaoInicial: string, racaoC1: string, racaoC2: string, racaoFinal: string, inicioHrJejum: string): Promise<ILote | undefined> => {
    try {
        const { data } = await api.post<ILote>(`/raca/${raca}/espaco/1/lotes?perdas_no_transporte=${perdasTransporte}&data_recebimento=${formataDatasQuery(dataRecebimento)}&previsao_entrega=${formataDatasQuery(previsaoEntrega)}&data_entrega=${formataDatasQuery(dataEntrega)}&tamanho_previsto=${tamanhoPrevisto}&tamanho_efetivo=${tamanhoEfetivo}&peso_entrada=${pesoEntrada}&racao_inicial=${formataDatasQuery(racaoInicial)}&racao_c1=${formataDatasQuery(racaoC1)}&racao_c2=${formataDatasQuery(racaoC2)}&racao_final=${formataDatasQuery(racaoFinal)}&inicio_horario_jejum=${formataDatasQuery(inicioHrJejum)}`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

const deleteLote = async (id: number): Promise<ILote | undefined> => {
    try {
        const { data } = await api.delete<ILote>(`lotes/${id}`);
        if (data) {
            return data;
        } else {
            return undefined;
        }
    } catch (error) {
        return undefined;
    }
};

export const LoteService = {
    getLoteById,
    updateLote,
    createLote,
    getLotes,
    deleteLote
  };