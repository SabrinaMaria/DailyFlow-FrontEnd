import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Picker, TextInput, View, Pressable } from 'react-native';
import { FluxoDetalheStyles } from '../styles/FluxoDetalhe.style';
import { FluxoDeCaixaService, IFluxo } from '../services/FluxoDeCaixaService';

export default function FluxoDeCaixaDetalhe({ route }) {
    const hoje = new Date().toISOString().toString().substr(8, 2) + '/' + new Date().toISOString().toString().substr(5, 2) + '/' + new Date().toISOString().toString().substr(0, 4)

    const [tipo, setTipo] = useState(1);
    const [entidadePai, setEntidadePai] = useState(1);
    const [data, setData] = useState(hoje);
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    const navigation = useNavigation();

    const id = route.params.id;

    function formataDatasResponse(data: string) {
        return data.substr(8, 2) + '/' + data.toString().substr(5, 2) + '/' + data.toString().substr(0, 4);
    }

    useEffect(() => {
        if (id !== 0) {
            fetchFluxo();
        } else {
            setTipo(1);
            setEntidadePai(1);
            setData(hoje);
            setValor("");
            setDescricao("");
        }
    }, [id]);

    async function fetchFluxo() {
        const fluxo = await FluxoDeCaixaService.getRegistroById(id);

        if (fluxo) {
            setTipo(fluxo.receita ? 1 : 2);
            setEntidadePai(fluxo.espaco_id != 0 ? 2 : 1);
            setData(formataDatasResponse(fluxo.data));
            setValor(fluxo.valor.toString());
            setDescricao(fluxo.descricao);
        }
    }

    async function handleCreateFluxo() {
        if (id !== 0) {
            FluxoDeCaixaService.updateRegistroFluxo(id, entidadePai, tipo, valor, descricao, data);
        } else {
            FluxoDeCaixaService.createRegistroFluxo(entidadePai, tipo, valor, descricao, data);
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
                            placeholder="0,00"
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