import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text, Pressable, Alert, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../services/api';
import { ILote } from './LoteDetalhe';

export default function Lotes() {
    const [lotes, setLotes] = useState<ILote[]>();
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(0);

    const navigation = useNavigation();

    useEffect(() => {
        api.get('lotes').then(response => setLotes(response.data));
    }, []);

    function handleLoteDetalhe(id: number) {
        navigation.navigate('Lote detalhe', { id });
    }

    function handleLoteExcluir(id: number) {
        api.delete(`lotes/${id}`);
        setModalVisible(!modalVisible);
    }

    function onPressModal(item: number) {
        setModalVisible(!modalVisible);
        setItemSelecionado(item);
    }

    return (
        <View>
            <ScrollView>
                {lotes?.map((lote, indexLote) => (
                    <View style={indexLote === lotes.length - 1 ? styles.lastLote : styles.container}>
                        <View>
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
                        <View style={indexLote === 0 ? styles.buttons1 : styles.buttons}>
                            <Pressable onPress={() => handleLoteDetalhe(lote.id)} key={indexLote}>
                                <Icon name="pencil" size={30} color="#999" />
                            </Pressable>
                            <Pressable onPress={() => onPressModal(lote.id)} key={indexLote}>
                                <Icon name="trash" size={30} color="#999" />
                            </Pressable>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.bottomView}>
                <Pressable style={styles.pressable} onPress={() => handleLoteDetalhe(0)}>
                    <Text style={styles.textButton}>  +</Text>
                </Pressable>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Deseja excluir o item selecionado?</Text>
                        <View style={styles.modalButtons}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonConfirm]}
                                onPress={() => handleLoteExcluir(itemSelecionado)}
                            >
                                <Text style={styles.textStyle}>Confirmar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginBottom: 380,
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        margin: 20,
        marginTop: 0,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
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
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 140,
        marginRight: 7,
        justifyContent: 'space-between',
    },
    buttons1: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 140,
        marginRight: 7,
        justifyContent: 'space-between',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    buttonConfirm: {
        backgroundColor: "red",
        marginLeft: 5,
        marginRight: -55,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalButtons: {
        flexDirection: 'row',
        marginBottom: -10,
    }
});