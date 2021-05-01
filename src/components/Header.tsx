import React from 'react';
import { Container, Title, Icon, HeaderStyles } from '../styles/Header.style';

interface HeaderProps {
  title: string;
  onPress(): void;
}

const Header: React.FC<HeaderProps> = ({ title, onPress }) => {
  return (
    <Container>
      <Icon size={30} name="menu" color="black" onPress={onPress} />
      <Title style={title === 'Lotes' ? HeaderStyles.lotes : HeaderStyles.dash}>{title}</Title>
    </Container>
  );
};

export default Header;