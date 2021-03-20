import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../services/api';
import { ILote } from './LoteDetalhe';

export default function Lotes() {
    const [lotes, setLotes] = useState<ILote[]>();

    const navigation = useNavigation();

    useEffect(() => {
        api.get('lotes').then(response => setLotes(response.data));
    }, []);

    function handleLoteDetalhe(id: number) {
        console.log('bbbbbbbb' + id);
        navigation.navigate('Lote detalhe', { id })
    }

    return (
        <View>
            <ScrollView>
                {lotes?.map((lote, indexLote) => (
                    <Pressable onPress={() => handleLoteDetalhe(lote.id)}>
                        <View style={indexLote === lotes.length - 1 ? styles.lastLote : styles.container}>
                            <View>
                                <Text style={indexLote === 0 ? styles.firstLote : styles.allLotes}>
                                    {lote?.data_recebimento.toString().substr(8, 2) + '/'
                                        + lote?.data_recebimento.toString().substr(5, 2) + '/'
                                        + lote?.data_recebimento.toString().substr(0, 4)
                                    }
                                </Text>
                            </View>
                            <View>
                                <Text style={lote.data_entrega > new Date() ? styles.fechado : styles.aberto}>{lote.data_entrega > new Date() ? 'fechado' : 'aberto'}</Text>
                            </View>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
            <View style={styles.bottomView}>
                <Pressable style={styles.pressable} onPress={() => handleLoteDetalhe(0)}>
                    <Text style={styles.textButton}>  +</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        margin: 20,
        marginTop: 0,
        paddingBottom: 20,
    },
    firstLote: {
        paddingTop: 20,
        color: 'black',
        fontSize: 20,
    },
    allLotes: {
        color: 'black',
        fontSize: 20,
    },
    lastLote: {
        marginBottom: 130,
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        margin: 20,
        marginTop: 0,
        paddingBottom: 20,
    },
    bottomView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#6495ED',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: 280,
        bottom: 0
    },
    textButton: {
        paddingRight: 9,
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 40,
        color: '#F0F8FF',
        fontWeight: 'bold',
    },
    pressable: {
        marginLeft: -10,
    },
    aberto: {
        color: 'green',
    },
    fechado: {
        color: 'red',
    }
});