import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const MenuStyles = StyleSheet.create({
  item: {
    flex: 1,
    marginLeft: 30,
    marginTop: 60,
  },
  sair: {
    marginTop: 470,
  },
  icon: {
    marginRight: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
    marginRight: 80
  },
  home: {
    marginTop: 60,
  }
});

export const Container = styled.View`
  flex-direction: row;
  height: 25px;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin-left: 15px;
`;