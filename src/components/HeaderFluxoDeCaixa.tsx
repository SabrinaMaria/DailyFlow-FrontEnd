import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { Container, Title, Icon, HeaderFluxoStyles } from '../styles/HeaderFluxoDeCaixa.style';

interface HeaderProps {
  title: string;
  saldo: string;
  receitas: string;
  despesas: string;
  onPress(): void;
}

const Header: React.FC<HeaderProps> = ({ title, saldo, receitas, despesas, onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Icon size={30} name="menu" color="black" onPress={onPress} />
      <Pressable onPress={() => setModalVisible(!modalVisible)} style={HeaderFluxoStyles.title}>
        <Title>{title}</Title>
        <Text style={saldo.substr(3, 1) !== "-" ? HeaderFluxoStyles.saldoPositivo : HeaderFluxoStyles.saldoNegativo}>{saldo}</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={HeaderFluxoStyles.centeredView}>
          <View style={HeaderFluxoStyles.modalView}>
            <Icon style={HeaderFluxoStyles.close} size={20} name="close" color="black" onPress={() => setModalVisible(!modalVisible)} />
            <View style={HeaderFluxoStyles.totais}>
              <View>
                <Text style={HeaderFluxoStyles.receitas}>Receitas</Text>
                <Text>{receitas}</Text>
              </View>
              <View>
                <Text style={HeaderFluxoStyles.despesas}>Despesas</Text>
                <Text>{despesas}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default Header;