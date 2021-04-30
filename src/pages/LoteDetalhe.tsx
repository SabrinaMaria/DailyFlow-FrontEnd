import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput, Alert, Pressable, Picker } from 'react-native';
import api from '../services/api';
import { useNavigation } from '@react-navigation/core';
import { LoteDetalheStyles } from '../styles/LoteDetalhe.style';

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

export default function LoteDetalhe({ route }) {
    const hoje = new Date().toISOString().toString().substr(8, 2) + '/' + new Date().toISOString().toString().substr(5, 2) + '/' + new Date().toISOString().toString().substr(0, 4)

    const [lote, setLote] = useState<ILote>();
    const [raca, setRaca] = useState(1);
    const [perdasTransporte, setPerdasTransporte] = useState('');
    const [dataRecebimento, setDataRecebimento] = useState(hoje);
    const [previsaoEntrega, setPrevisaoEntrega] = useState(hoje);
    const [dataEntrega, setDataEntrega] = useState(hoje);
    const [tamanhoPrevisto, setTamanhoPrevisto] = useState('');
    const [tamanhoEfetivo, setTamanhoEfetivo] = useState('');
    const [pesoEntrada, setPesoEntrada] = useState('');
    const [racaoInicial, setRacaoInicial] = useState(hoje);
    const [racaoC1, setRacaoC1] = useState(hoje);
    const [racaoC2, setRacaoC2] = useState(hoje);
    const [racaoFinal, setRacaoFinal] = useState(hoje);
    const [inicioHrJejum, setInicioHrJejum] = useState(hoje);

    const navigation = useNavigation();

    const id = route.params.id;

    function formataDatasQuery(data: string) {
        return data.substr(6, 4) + "-" + data.substr(3, 2) + "-" + data.substr(0, 2);
    }

    function formataDatasResponse(data: Date) {
        return data.toString().substr(8, 2) + '/' + data.toString().substr(5, 2) + '/' + data.toString().substr(0, 4);
    }

    useEffect(() => {
        try {
            api.get(`lotes/${id}`).then(response => setLote(response.data));
        } catch {
            console.error("Lote não encontrado");
        }
    }, [id]);

    useEffect(() => {
        if (lote) {
            setRaca(lote.raca_id);
            setPerdasTransporte(lote.perdas_no_transporte.toString());
            setDataRecebimento(formataDatasResponse(lote.data_recebimento));
            setPrevisaoEntrega(formataDatasResponse(lote.previsao_entrega));
            setDataEntrega(formataDatasResponse(lote.data_entrega));
            setTamanhoPrevisto(lote.tamanho_previsto.toString());
            setTamanhoEfetivo(lote.tamanho_efetivo.toString());
            setPesoEntrada(lote.peso_entrada.toString());
            setRacaoInicial(formataDatasResponse(lote.racao_inicial));
            setRacaoC1(formataDatasResponse(lote.racao_c1));
            setRacaoC2(formataDatasResponse(lote.racao_c2));
            setRacaoFinal(formataDatasResponse(lote.racao_final));
            setInicioHrJejum(formataDatasResponse(lote.inicio_horario_jejum));
        }
    }, [lote]);

    async function handleCreateLote() {
        if (id !== 0) {
            try {
                await api.put(`/raca/${raca}/espaco/1/lotes/${id}?perdas_no_transporte=${perdasTransporte}&data_recebimento=${formataDatasQuery(dataRecebimento)}&previsao_entrega=${formataDatasQuery(previsaoEntrega)}&data_entrega=${formataDatasQuery(dataEntrega)}&tamanho_previsto=${tamanhoPrevisto}&tamanho_efetivo=${tamanhoEfetivo}&peso_entrada=${pesoEntrada}&racao_inicial=${formataDatasQuery(racaoInicial)}&racao_c1=${formataDatasQuery(racaoC1)}&racao_c2=${formataDatasQuery(racaoC2)}&racao_final=${formataDatasQuery(racaoFinal)}&inicio_horario_jejum=${formataDatasQuery(inicioHrJejum)}`);
            } catch {
                console.error("Não foi possível atualizar o lote");
            }
        } else {
            try {
                await api.post(`raca/${raca}/espaco/1/lotes?perdas_no_transporte=${perdasTransporte}&data_recebimento=${formataDatasQuery(dataRecebimento)}&previsao_entrega=${formataDatasQuery(previsaoEntrega)}&data_entrega=${formataDatasQuery(dataEntrega)}&tamanho_previsto=${tamanhoPrevisto}&tamanho_efetivo=${tamanhoEfetivo}&peso_entrada=${pesoEntrada}&racao_inicial=${formataDatasQuery(racaoInicial)}&racao_c1=${formataDatasQuery(racaoC1)}&racao_c2=${formataDatasQuery(racaoC2)}&racao_final=${formataDatasQuery(racaoFinal)}&inicio_horario_jejum=${formataDatasQuery(inicioHrJejum)}`);
            } catch {
                console.error("Não foi possível cadastrar o lote");
            }
        }

        navigation.navigate('Lotes');
    }

    return (
        <View style={LoteDetalheStyles.container}>
            <ScrollView>
                <View style={LoteDetalheStyles.scrollCont}>
                    <Text>Raça</Text>
                    <View style={LoteDetalheStyles.racaPicker}>
                        <Picker
                            style={{ height: 40, width: 340 }}
                            selectedValue={raca}
                            onValueChange={(itemValue) => setRaca(itemValue)}
                        >
                            <Picker.Item label="Griller" value="1" />
                            <Picker.Item label="Broiller" value="2" />
                        </Picker>
                    </View>
                    <Text>Perdas no transporte</Text>
                    <TextInput
                        style={LoteDetalheStyles.input}
                        placeholder="Digite aqui"
                        keyboardType="numeric"
                        value={perdasTransporte}
                        onChangeText={setPerdasTransporte}
                    />
                    <Text>Data de recebimento</Text>
                    <TextInput
                        style={LoteDetalheStyles.input}
                        placeholder="DD/MM/AAAA"
                        value={dataRecebimento}
                        onChangeText={setDataRecebimento}
                    />
                    <Text>Previsão de entrega</Text>
                    <TextInput
                        style={LoteDetalheStyles.input}
                        placeholder="DD/MM/AAAA"
                        value={previsaoEntrega}
                        onChangeText={setPrevisaoEntrega}
                    />
                    <Text>Data de entrega</Text>
                    <TextInput
                        style={LoteDetalheStyles.input}
                        placeholder="DD/MM/AAAA"
                        value={dataEntrega}
                        onChangeText={setDataEntrega}
                    />
                    <Text>Tamanho previsto</Text>
                    <TextInput style={LoteDetalheStyles.input}
                        placeholder="Digite aqui"
                        keyboardType="numeric"
                        value={tamanhoPrevisto}
                        onChangeText={setTamanhoPrevisto}
                    />
                    <Text>Tamanho efetivo</Text>
                    <TextInput style={LoteDetalheStyles.input}
                        placeholder="Digite aqui"
                        keyboardType="numeric"
                        value={tamanhoEfetivo}
                        onChangeText={setTamanhoEfetivo}
                    />
                    <Text>Peso de entrada</Text>
                    <TextInput style={LoteDetalheStyles.input}
                        placeholder="Digite aqui"
                        value={pesoEntrada}
                        onChangeText={setPesoEntrada}
                    />
                    <Text>Ração inicial</Text>
                    <TextInput
                        style={LoteDetalheStyles.input}
                        placeholder="DD/MM/AAAA"
                        value={racaoInicial}
                        onChangeText={setRacaoInicial}
                    />
                    <Text>Ração C1</Text>
                    <TextInput
                        style={LoteDetalheStyles.input}
                        placeholder="DD/MM/AAAA"
                        value={racaoC1}
                        onChangeText={setRacaoC1}
                    />
                    <Text>Ração C2</Text>
                    <TextInput
                        style={LoteDetalheStyles.input}
                        placeholder="DD/MM/AAAA"
                        value={racaoC2}
                        onChangeText={setRacaoC2}
                    />
                    <Text>Ração final</Text>
                    <TextInput
                        style={LoteDetalheStyles.input}
                        placeholder="DD/MM/AAAA"
                        value={racaoFinal}
                        onChangeText={setRacaoFinal}
                    />
                    <Text>Início do horário de jejum</Text>
                    <TextInput
                        style={LoteDetalheStyles.lastInput}
                        placeholder="DD/MM/AAAA"
                        value={inicioHrJejum}
                        onChangeText={setInicioHrJejum}
                    />
                </View>

                <View style={LoteDetalheStyles.middleView}>
                    <Pressable style={LoteDetalheStyles.pressable} onPress={() => Alert.alert('Nada')}>
                        <Text style={LoteDetalheStyles.textButton2}>ADICIONAR ATUALIZAÇÃO</Text>
                    </Pressable>
                </View>

                {/*<View style={LoteDetalheStyles.middleView2}>
                    <View style={LoteDetalheStyles.atualizacaoColumn}>
                        <Text style={LoteDetalheStyles.textAtualizacao}>Data:</Text>
                        <Text style={LoteDetalheStyles.textAtualizacao}>Peso:</Text>
                        <Text style={LoteDetalheStyles.textAtualizacao}>Tamanho efetivo:</Text>
                        <Text style={LoteDetalheStyles.textAtualizacao}>Mortalidade:</Text>
                    </View>
                    <View>
                        <Text style={LoteDetalheStyles.textAtualizacao}>18/03/2021</Text>
                        <Text style={LoteDetalheStyles.textAtualizacao}>20.560 (kg)</Text>
                        <Text style={LoteDetalheStyles.textAtualizacao}>100</Text>
                        <Text style={LoteDetalheStyles.textAtualizacao}>12</Text>
                    </View>
                </View>*/}

                <StatusBar style="auto" />
            </ScrollView>

            <View style={LoteDetalheStyles.bottomView}>
                <Pressable style={LoteDetalheStyles.pressable} onPress={() => handleCreateLote()}>
                    <Text style={LoteDetalheStyles.textButton}>SALVAR</Text>
                </Pressable>
            </View>
        </View>
    )
}