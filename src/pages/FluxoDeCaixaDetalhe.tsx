import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Picker, TextInput, View, Pressable } from 'react-native';
import { FluxoDetalheStyles } from '../styles/FluxoDetalhe.style';
import api from '../services/api';

export default function FluxoDeCaixaDetalhe({ route }) {
    const hoje = new Date().toISOString().toString().substr(8, 2) + '/' + new Date().toISOString().toString().substr(5, 2) + '/' + new Date().toISOString().toString().substr(0, 4)

    const [tipo, setTipo] = useState(1);
    const [entidadePai, setEntidadePai] = useState(1);
    const [data, setData] = useState(hoje);
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    const navigation = useNavigation();

    const id = route.params.id;

    function formataDatasQuery(data: string) {
        return data.substr(6, 4) + "-" + data.substr(3, 2) + "-" + data.substr(0, 2);
    }

    async function handleCreateFluxo() {
        if (id !== 0) {
            try {
                //await api.put(`/raca/${raca}/espaco/1/lotes/${id}?perdas_no_transporte=${perdasTransporte}&data_recebimento=${formataDatasQuery(dataRecebimento)}&previsao_entrega=${formataDatasQuery(previsaoEntrega)}&data_entrega=${formataDatasQuery(dataEntrega)}&tamanho_previsto=${tamanhoPrevisto}&tamanho_efetivo=${tamanhoEfetivo}&peso_entrada=${pesoEntrada}&racao_inicial=${formataDatasQuery(racaoInicial)}&racao_c1=${formataDatasQuery(racaoC1)}&racao_c2=${formataDatasQuery(racaoC2)}&racao_final=${formataDatasQuery(racaoFinal)}&inicio_horario_jejum=${formataDatasQuery(inicioHrJejum)}`);
            } catch {
                console.error("Não foi possível atualizar o registro");
            }
        } else {
            try {
                await api.post(`fluxo_caixa/propriedade/${entidadePai == 1 ? 1 : 0}/espaco/${entidadePai == 2 ? 1 : 0}?receita=${tipo == 1 ? true : false}&valor=${valor}&descricao=${descricao}&data=${formataDatasQuery(data)}`);
            } catch {
                console.error("Não foi possível cadastrar o registro");
            }
        }

        navigation.navigate('Fluxos');
    }

    return (
        <View>
            <View style={FluxoDetalheStyles.scrollCont}>
                <View style={FluxoDetalheStyles.combos}>
                    <View>
                        <Text>Tipo</Text>
                        <View style={FluxoDetalheStyles.periodoPicker}>
                            <Picker
                                style={{ height: 40, width: 170 }}
                                selectedValue={tipo}
                                onValueChange={(itemValue) => setTipo(itemValue)}
                            >
                                <Picker.Item label="receita" value="1" />
                                <Picker.Item label="despesa" value="2" />
                            </Picker>
                        </View>
                    </View>
                    <View style={FluxoDetalheStyles.combosSpace}>
                        <Text>Parentesco</Text>
                        <View style={FluxoDetalheStyles.periodoPicker}>
                            <Picker
                                style={{ height: 40, width: 170 }}
                                selectedValue={entidadePai}
                                onValueChange={(itemValue) => setEntidadePai(itemValue)}
                            >
                                <Picker.Item label="propriedade" value="1" />
                                <Picker.Item label="espaço" value="2" />
                            </Picker>
                        </View>
                    </View>
                </View>
                <Text>Descriçao</Text>
                <TextInput
                    style={FluxoDetalheStyles.inputDesc}
                    placeholder="Digite aqui"
                    value={descricao}
                    onChangeText={setDescricao}
                />
                <View style={FluxoDetalheStyles.combos}>
                    <View>
                        <Text>Data</Text>
                        <TextInput
                            style={FluxoDetalheStyles.input}
                            placeholder="DD/MM/AAAA"
                            value={data}
                            onChangeText={setData}
                        />
                    </View>
                    <View style={FluxoDetalheStyles.combosSpace}>
                        <Text>Valor</Text>
                        <TextInput
                            style={FluxoDetalheStyles.input}
                            placeholder="Digite aqui"
                            keyboardType="decimal-pad"
                            value={valor}
                            onChangeText={setValor}
                        />
                    </View>
                </View>
                <View style={FluxoDetalheStyles.bottomView}>
                    <Pressable style={FluxoDetalheStyles.pressable} onPress={() => handleCreateFluxo()}>
                        <Text style={FluxoDetalheStyles.textButton}>SALVAR</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}