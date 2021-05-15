import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Alert, Modal, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../services/api';
import { FluxoStyles } from '../styles/FluxoDeCaixa.style';
import Header from '../components/HeaderFluxoDeCaixa';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../routes';
import { FluxoDetalheStyles } from '../styles/FluxoDetalhe.style';
import { FluxoDeCaixaService } from '../services/FluxoDeCaixaService';

export default function Lotes() {
    const [fluxos, setFluxos] = useState<IFluxo[]>();

    const navigation = useNavigation() as DrawerNavigationProp<
        RootDrawerParamList,
        'Fluxos'
    >;

    useEffect(() => {
        FluxoDeCaixaService.getRegistrosFluxo().then((data) => {
            if (data) {
                setFluxos(data);
            }
        })
    }, []);

    function numberToReal(valor: number) {
        let numero = valor.toFixed(2).split('.');
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }

    function totalReceitas() {
        let total = 0;

        fluxos?.map((fluxo) => {
            if (fluxo.receita) {
                total += fluxo.valor;
            }
        });

        return numberToReal(total);
    }

    function totalDespesas() {
        let total = 0;

        fluxos?.map((fluxo) => {
            if (!fluxo.receita) {
                total += fluxo.valor;
            }
        });

        return numberToReal(total);
    }

    function saldoAtual() {
        let saldo = 0;

        fluxos?.map((fluxo) => {
            if (fluxo.receita) {
                saldo += fluxo.valor;
            } else {
                saldo -= fluxo.valor;
            }
        });

        return numberToReal(saldo);
    }

    function handleFluxoDetalhe(id: number) {
        navigation.navigate('Fluxo detalhe', { id });
    }

    return (
        <View>
            <Header title="Saldo atual:" saldo={saldoAtual()} receitas={totalReceitas()} despesas={totalDespesas()} onPress={() => navigation.openDrawer()} />
            <ScrollView>
                <View style={FluxoStyles.combos}>
                    <View>
                        <Text style={FluxoStyles.comboText}>Ano</Text>
                        <View style={FluxoStyles.periodoPicker}>
                            <Picker
                                style={{ height: 40, width: 150 }}
                                selectedValue={fluxos}
                                onValueChange={(itemValue) => setFluxos(itemValue)}
                            >
                                <Picker.Item label="2021" value="1" />
                                <Picker.Item label="2020" value="2" />
                            </Picker>
                        </View>
                    </View>
                    <View style={FluxoStyles.combosSpace}>
                        <Text style={FluxoStyles.comboText}>Mês</Text>
                        <View style={FluxoStyles.periodoPicker}>
                            <Picker
                                style={{ height: 40, width: 150 }}
                                selectedValue={fluxos}
                                onValueChange={(itemValue) => setFluxos(itemValue)}
                            >
                                <Picker.Item label="maio" value="1" />
                                <Picker.Item label="abril" value="2" />
                            </Picker>
                        </View>
                    </View>
                </View>
                {fluxos?.map((fluxo, indexLote) => (
                    <View style={indexLote === fluxos.length - 1 ? FluxoStyles.lastFulxo : FluxoStyles.container}>
                        <View>
                            <View>
                                <Text style={indexLote === 0 ? FluxoStyles.firstFluxo : FluxoStyles.allFluxos}>
                                    {fluxo?.data.toString().substr(8, 2) + '/'
                                        + fluxo?.data.toString().substr(5, 2) + '/'
                                        + fluxo?.data.toString().substr(0, 4)
                                    }
                                </Text>
                            </View>
                            <View>
                                <Text style={fluxo.receita ? FluxoStyles.receita : FluxoStyles.despesa}>{fluxo.receita ? 'receita' : 'despesa'}</Text>
                            </View>
                        </View>
                        <View style={indexLote === 0 ? FluxoStyles.descEValor : undefined}>
                            <Text style={FluxoStyles.descText}>{fluxo.descricao}</Text>
                            <Text style={fluxo.receita ? FluxoStyles.valorTextR : FluxoStyles.valorTextD}>{numberToReal(fluxo.valor)}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={FluxoDetalheStyles.bottomView}>
                <Pressable style={FluxoDetalheStyles.pressable} onPress={() => handleFluxoDetalhe(0)}>
                    <Text style={FluxoDetalheStyles.textButton}>NOVO REGISTRO</Text>
                </Pressable>
            </View>
        </View>
    );
}