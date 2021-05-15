import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

export const HeaderFluxoStyles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    marginLeft: 65
  },
  saldoPositivo: {
    marginLeft: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green'
  },
  saldoNegativo: {
    marginLeft: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red'
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
  close: {
    marginLeft: 200,
    marginRight: -25,
    marginTop: -20,
    marginBottom: 10
  },
  totais: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  receitas: {
    fontWeight: 'bold',
    color: 'green'
  },
  despesas: {
    fontWeight: 'bold',
    color: 'red'
  }
});

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin-left: 15px;
`;