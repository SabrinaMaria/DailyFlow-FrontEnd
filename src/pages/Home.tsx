import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../routes';
import { Container } from '../styles/Home.style';
import Header from '../components/Header';

const Home: React.FC = () => {
  const navigation = useNavigation() as DrawerNavigationProp<
    RootDrawerParamList,
    'Home'
  >;
  return (
    <Container>
      <Header title="Dashboard" onPress={() => navigation.openDrawer()} />
    </Container>
  );
};

export default Home;