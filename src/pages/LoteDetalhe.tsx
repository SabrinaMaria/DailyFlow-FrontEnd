import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Alert, Pressable, Picker } from 'react-native';
import api from '../services/api';
import { useNavigation } from '@react-navigation/core';

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

export default function LoteDetalhe({route}) {
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

    useEffect(() => {
        api.get(`lotes/${id}`).then(response => setLote(response.data));
    }, [id]);

    useEffect(() => {
        if (lote) {
            setRaca(lote.raca_id);
            setPerdasTransporte(lote.perdas_no_transporte.toString());
            setDataRecebimento(lote.data_recebimento.toString().substr(8, 2) + '/'
            + lote.data_recebimento.toString().substr(5, 2) + '/'
            + lote.data_recebimento.toString().substr(0, 4));
            setPrevisaoEntrega(lote.previsao_entrega.toString().substr(8, 2) + '/'
            + lote.previsao_entrega.toString().substr(5, 2) + '/'
            + lote.previsao_entrega.toString().substr(0, 4));
            setDataEntrega(lote.data_entrega.toString().substr(8, 2) + '/'
            + lote.data_entrega.toString().substr(5, 2) + '/'
            + lote.data_entrega.toString().substr(0, 4));
            setTamanhoPrevisto(lote.tamanho_previsto.toString());
            setTamanhoEfetivo(lote.tamanho_efetivo.toString());
            setPesoEntrada(lote.peso_entrada.toString());
            setRacaoInicial(lote.racao_inicial.toString().substr(8, 2) + '/'
            + lote.racao_inicial.toString().substr(5, 2) + '/'
            + lote.racao_inicial.toString().substr(0, 4));
            setRacaoC1(lote.racao_c1.toString().substr(8, 2) + '/'
            + lote.racao_c1.toString().substr(5, 2) + '/'
            + lote.racao_c1.toString().substr(0, 4));
            setRacaoC2(lote.racao_c2.toString().substr(8, 2) + '/'
            + lote.racao_c2.toString().substr(5, 2) + '/'
            + lote.racao_c2.toString().substr(0, 4));
            setRacaoFinal(lote.racao_final.toString().substr(8, 2) + '/'
            + lote.racao_final.toString().substr(5, 2) + '/'
            + lote.racao_final.toString().substr(0, 4));
            setInicioHrJejum(lote.inicio_horario_jejum.toString().substr(8, 2) + '/'
            + lote.inicio_horario_jejum.toString().substr(5, 2) + '/'
            + lote.inicio_horario_jejum.toString().substr(0, 4));
        }
    }, [lote]);

    async function handleCreateLote() {
        /*const data = new FormData();

        data.append('perdas_no_transporte', perdasTransporte);
        data.append('data_recebimento', dataRecebimento);
        data.append('previsao_entrega', previsaoEntrega);
        data.append('data_entrega', dataEntrega);
        data.append('tamanho_previsto', tamanhoPrevisto);
        data.append('tamanho_efetivo', tamanhoEfetivo);
        data.append('peso_entrada', pesoEntrada);
        data.append('racao_inicial', racaoInicial);
        data.append('racao_c1', racaoC1);
        data.append('racao_c2', racaoC2);
        data.append('racao_final', racaoFinal);
        data.append('inicio_horario_jejum', inicioHrJejum);

        console.log(data);
        await api.post(`raca/${raca}/espaco/1/lotes`, data);
        return Alert.alert('Alterações salvas com sucesso');*/

        navigation.navigate('Lotes');
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.scrollCont}>
                    <Text>Raça</Text>
                    <View style={styles.racaPicker}>
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
                        style={styles.input}
                        placeholder="Digite aqui"
                        keyboardType="numeric"
                        value={perdasTransporte}
                        onChangeText={setPerdasTransporte}
                    />
                    <Text>Data de recebimento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        value={dataRecebimento}
                        onChangeText={setDataRecebimento}
                    />
                    <Text>Previsão de entrega</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        value={previsaoEntrega}
                        onChangeText={setPrevisaoEntrega}
                    />
                    <Text>Data de entrega</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        value={dataEntrega}
                        onChangeText={setDataEntrega}
                    />
                    <Text>Tamanho previsto</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite aqui"
                        keyboardType="numeric"
                        value={tamanhoPrevisto}
                        onChangeText={setTamanhoPrevisto}
                    />
                    <Text>Tamanho efetivo</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite aqui"
                        keyboardType="numeric"
                        value={tamanhoEfetivo}
                        onChangeText={setTamanhoEfetivo}
                    />
                    <Text>Peso de entrada</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite aqui"
                        value={pesoEntrada}
                        onChangeText={setPesoEntrada}
                    />
                    <Text>Ração inicial</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        value={racaoInicial}
                        onChangeText={setRacaoInicial}
                    />
                    <Text>Ração C1</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        value={racaoC1}
                        onChangeText={setRacaoC1}
                    />
                    <Text>Ração C2</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        value={racaoC2}
                        onChangeText={setRacaoC2}
                    />
                    <Text>Ração final</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        value={racaoFinal}
                        onChangeText={setRacaoFinal}
                    />
                    <Text>Início do horário de jejum</Text>
                    <TextInput
                        style={styles.lastInput}
                        placeholder="DD/MM/AAAA"
                        value={inicioHrJejum}
                        onChangeText={setInicioHrJejum}
                    />
                </View>

                <View style={styles.middleView}>
                    <Pressable style={styles.pressable} onPress={() => Alert.alert('Nada')}>
                        <Text style={styles.textButton2}>ADICIONAR ATUALIZAÇÃO</Text>
                    </Pressable>
                </View>

                {/*<View style={styles.middleView2}>
                    <View style={styles.atualizacaoColumn}>
                        <Text style={styles.textAtualizacao}>Data:</Text>
                        <Text style={styles.textAtualizacao}>Peso:</Text>
                        <Text style={styles.textAtualizacao}>Tamanho efetivo:</Text>
                        <Text style={styles.textAtualizacao}>Mortalidade:</Text>
                    </View>
                    <View>
                        <Text style={styles.textAtualizacao}>18/03/2021</Text>
                        <Text style={styles.textAtualizacao}>20.560 (kg)</Text>
                        <Text style={styles.textAtualizacao}>100</Text>
                        <Text style={styles.textAtualizacao}>12</Text>
                    </View>
                </View>*/}

                <StatusBar style="auto" />
            </ScrollView>

            <View style={styles.bottomView}>
                <Pressable style={styles.pressable} onPress={() => handleCreateLote()}>
                    <Text style={styles.textButton}>SALVAR</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    scrollCont: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 50,
    },
    text: {
        color: '#4169E1',
        fontSize: 50,
        textShadowColor: '#98FB98',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: 340,
        marginBottom: 15,
        marginTop: 5,
        borderWidth: 0.3,
        borderRadius: 5,
        padding: 10,
    },
    lastInput: {
        height: 40,
        width: 340,
        marginBottom: /*160*/80,
        marginTop: 5,
        borderWidth: 0.3,
        borderRadius: 5,
        padding: 10,
    },
    middleView: {
        width: 370,
        height: 50,
        marginBottom: /*150*/60,
        backgroundColor: '#F0F8FF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    middleView2: {
        width: 340,
        height: 80,
        paddingLeft: 20,
        marginTop: 100,
        marginBottom: 60,
        marginLeft: 10,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0, 
        flex: 1,
        flexDirection: 'row',
    },
    bottomView: {
        width: 370,
        height: 50,
        backgroundColor: '#6495ED',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    textButton: {
        width: 370,
        height: 50,
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#F0F8FF',
        fontWeight: 'bold',
    },
    textButton2: {
        width: 370,
        height: 50,
        paddingTop: 12,
        textAlign: 'center',
        fontSize: 18,
        color: '#6495ED',
        fontWeight: 'bold',
    },
    atualizacaoColumn: {
        marginRight: 60,
    },
    textAtualizacao: {
        color: 'grey',
    },
    pressable: {
        marginLeft: -10,
    },
    atualizacoesLabel: {
        fontSize: 25,
        paddingTop: 10,
        marginBottom: 15,
        color: '#6495ED',
    },
    racaPicker: {
        borderWidth: 0.3,
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 5,
    }
});