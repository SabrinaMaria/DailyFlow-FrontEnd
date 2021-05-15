import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import MenuItem from './MenuItem';
import {
  Container,
  Body,
  Footer,
} from '../styles/Menu.style';

const DrawerContent = (
  props: DrawerContentComponentProps,
): React.ReactElement => {
  const menuItems = [
    {
      label: 'Dashboard',
      route: 'Home',
      icon: 'home',
    },
    {
      label: 'Lotes',
      route: 'Lotes',
      icon: 'information',
    },
    {
      label: 'Fluxo de Caixa',
      route: 'Fluxo',
      icon: 'cash',
    },
  ];

  return (
    <Container>
      <Body>
        {menuItems.map(item => (
          <MenuItem
            stack={props}
            key={item.route}
            icon={item.icon}
            routeName={item.route}
            label={item.label}
          />
        ))}
      </Body>
      <Footer>
        <MenuItem
          stack={props}
          onPress={() => console.log('Saiu')}
          icon="power"
          label="Sair"
        />
      </Footer>
    </Container>
  );
};

export default DrawerContent;