import React, { useCallback, useMemo } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Container, Icon, MenuStyles } from '../styles/MenuItem.style';
import { Title } from '../styles/Header.style';
import { Pressable } from 'react-native';

interface MenuItemProps {
    routeName?: string;
    icon: string;
    label: string;
    onPress?(): void;
    stack: DrawerContentComponentProps;
}

const MenuItem: React.FC<MenuItemProps> = ({
    routeName,
    icon,
    label,
    onPress,
    stack,
}) => {
    const ActiveRouteName = useMemo(() => {
        if (!routeName) {
            return '';
        }

        return stack.state.routeNames[Number(stack.state.index)];
    }, [stack, routeName]);

    const IsActive = useMemo(() => {
        return ActiveRouteName === routeName;
    }, [ActiveRouteName, routeName]);

    const navigationToScreen = () => {
        if (onPress) {
            onPress();
        } else if (routeName) {
            stack.navigation.navigate(routeName);
        }
    };

    return (
        <Pressable onPress={() => navigationToScreen()}>
            <Container IsActive={routeName} key={routeName} style={label === 'Dashboard' ? MenuStyles.home : label === 'Sair' ? MenuStyles.sair : undefined}>
                <Icon name={icon} size={28} color={'white'} style={MenuStyles.icon} />
                <Title style={MenuStyles.text}>{label}</Title>
            </Container>
        </Pressable>
    );
};

export default MenuItem;