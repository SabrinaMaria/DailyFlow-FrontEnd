import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Alert, Pressable } from 'react-native';

export default function LoteDetalhe() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.scrollCont}>
                    <Text>Perdas no transporte</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite aqui"
                        keyboardType="numeric"
                    />
                    <Text>Data de recebimento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                    />
                    <Text>Previsão de entrega</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                    />
                    <Text>Data de entrega</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                    />
                    <Text>Tamanho previsto</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite aqui"
                        keyboardType="numeric"
                    />
                    <Text>Tamanho efetivo</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite aqui"
                        keyboardType="numeric"
                    />
                    <Text>Peso de entrada</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite aqui"
                    />
                    <Text>Ração inicial</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                    />
                    <Text>Ração C1</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                    />
                    <Text>Ração C2</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                    />
                    <Text>Ração final</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                    />
                    <Text>Início do horário de jejum</Text>
                    <TextInput
                        style={styles.lastInput}
                        placeholder="DD/MM/AAAA"
                    />
                </View>

                <View style={styles.middleView}>
                    <Pressable style={styles.pressable} onPress={() => Alert.alert('Nada')}>
                        <Text style={styles.textButton2}>ADICIONAR ATUALIZAÇÃO</Text>
                    </Pressable>
                </View>

                <View style={styles.middleView2}>
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
                </View>

                <StatusBar style="auto" />
            </ScrollView>

            <View style={styles.bottomView}>
                <Pressable style={styles.pressable} onPress={() => Alert.alert('Alterações salvas com sucesso')}>
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
        marginBottom: 160,
        marginTop: 5,
        borderWidth: 0.3,
        borderRadius: 5,
        padding: 10,
    },
    middleView: {
        width: 370,
        height: 50,
        marginBottom: 150,
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
        bottom: 0,flex: 1,
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
    }
});