import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput, Alert, Pressable, Picker } from 'react-native';
import api from '../services/api';
import { useNavigation } from '@react-navigation/core';
import { LoteDetalheStyles } from '../styles/LoteDetalhe.style';
import { ILote, LoteService } from '../services/LoteService';

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

    function formataDatasResponse(data: Date) {
        return data.toString().substr(8, 2) + '/' + data.toString().substr(5, 2) + '/' + data.toString().substr(0, 4);
    }

    useEffect(() => {
        if (id !== 0) {
            LoteService.getLoteById(id).then((data) => {
                if (data) {
                    setLote(data);
                }
            })
        } else {
            setRaca(1);
            setPerdasTransporte("");
            setDataRecebimento(hoje);
            setPrevisaoEntrega(hoje);
            setDataEntrega(hoje);
            setTamanhoPrevisto("");
            setTamanhoEfetivo("");
            setPesoEntrada("");
            setRacaoInicial(hoje);
            setRacaoC1(hoje);
            setRacaoC2(hoje);
            setRacaoFinal(hoje);
            setInicioHrJejum(hoje);
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
            LoteService.updateLote(id, raca, perdasTransporte, dataRecebimento, previsaoEntrega, dataEntrega, tamanhoPrevisto, tamanhoEfetivo, pesoEntrada, racaoInicial, racaoC1, racaoC2, racaoFinal, inicioHrJejum);
        } else {
            LoteService.createLote(raca, perdasTransporte, dataRecebimento, previsaoEntrega, dataEntrega, tamanhoPrevisto, tamanhoEfetivo, pesoEntrada, racaoInicial, racaoC1, racaoC2, racaoFinal, inicioHrJejum);
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