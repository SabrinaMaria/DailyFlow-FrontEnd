import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Pressable, Alert, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../services/api';
import { ILote } from './LoteDetalhe';
import { LotesStyles } from '../styles/Lote.style';
import Header from '../components/Header';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../routes';

export default function Lotes() {
    const [lotes, setLotes] = useState<ILote[]>();
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(0);

    const navigation = useNavigation() as DrawerNavigationProp<
    RootDrawerParamList,
    'Lotes'
  >;

    useEffect(() => {
        try {
            api.get('lotes').then(response => setLotes(response.data));
        } catch {
            console.error("Não foi possível listar os lotes");
        }
    }, []);

    function handleLoteDetalhe(id: number) {
        navigation.navigate('Lote detalhe', { id });
    }

    function handleLoteExcluir(id: number) {
        try {
            api.delete(`lotes/${id}`);
        } catch {
            console.error("Não foi possível excluir o lote");
        }
        setModalVisible(!modalVisible);
    }

    function onPressModal(item: number) {
        setModalVisible(!modalVisible);
        setItemSelecionado(item);
    }

    return (
        <View>
            <Header title="Lotes" onPress={() => navigation.openDrawer()} />
            <ScrollView>
                {lotes?.map((lote, indexLote) => (
                    <View style={indexLote === lotes.length - 1 ? LotesStyles.lastLote : LotesStyles.container}>
                        <View>
                            <View>
                                <Text style={indexLote === 0 ? LotesStyles.firstLote : LotesStyles.allLotes}>
                                    {lote?.data_recebimento.toString().substr(8, 2) + '/'
                                        + lote?.data_recebimento.toString().substr(5, 2) + '/'
                                        + lote?.data_recebimento.toString().substr(0, 4)
                                    }
                                </Text>
                            </View>
                            <View>
                                <Text style={lote.data_entrega > new Date() ? LotesStyles.fechado : LotesStyles.aberto}>{lote.data_entrega > new Date() ? 'fechado' : 'aberto'}</Text>
                            </View>
                        </View>
                        <View style={indexLote === 0 ? LotesStyles.buttons1 : LotesStyles.buttons}>
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
            <View style={LotesStyles.bottomView}>
                <Pressable style={LotesStyles.pressable} onPress={() => handleLoteDetalhe(0)}>
                    <Text style={LotesStyles.textButton}>  +</Text>
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
                <View style={LotesStyles.centeredView}>
                    <View style={LotesStyles.modalView}>
                        <Text style={LotesStyles.modalText}>Deseja excluir o item selecionado?</Text>
                        <View style={LotesStyles.modalButtons}>
                            <Pressable
                                style={[LotesStyles.button, LotesStyles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={LotesStyles.textStyleClose}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={[LotesStyles.button, LotesStyles.buttonConfirm]}
                                onPress={() => handleLoteExcluir(itemSelecionado)}
                            >
                                <Text style={LotesStyles.textStyleConfirm}>Confirmar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}