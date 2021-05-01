import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

export const HeaderStyles = StyleSheet.create({
  lotes: {
    marginLeft: 110,
  },
  dash: {
    marginLeft: 90,
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