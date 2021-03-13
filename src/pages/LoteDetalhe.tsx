import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Alert, Button, Pressable } from 'react-native';

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
                        keyboardType="numeric"
                    />
                    <Text>Previsão de entrega</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
                    />
                    <Text>Data de entrega</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
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
                        keyboardType="numeric"
                    />
                    <Text>Ração inicial</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
                    />
                    <Text>Ração C1</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
                    />
                    <Text>Ração C2</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
                    />
                    <Text>Ração final</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
                    />
                    <Text>Início do horário de jejum</Text>
                    <TextInput
                        style={styles.lastInput}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.middleView}>
                    <Pressable style={styles.pressable} onPress={() => Alert.alert('Nada')}>
                        <Text style={styles.textButton2}>ADICIONAR ATUALIZAÇÃO</Text>
                    </Pressable>
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
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#F0F8FF',
        padding: 10,
    },
    lastInput: {
        height: 40,
        width: 340,
        marginBottom: 70,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#F0F8FF',
        padding: 10,
    },
    middleView: {
        width: 370,
        height: 50,
        marginBottom: 60,
        backgroundColor: '#F0F8FF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
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
        paddingTop: 4,
        textAlign: 'center',
        fontSize: 30,
        color: '#F0F8FF',
        fontWeight: 'bold',
    },
    textButton2: {
        width: 370,
        height: 50,
        paddingTop: 8,
        textAlign: 'center',
        fontSize: 25,
        color: '#6495ED',
        fontWeight: 'bold',
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