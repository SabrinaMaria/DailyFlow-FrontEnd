import React from 'react';
import LoteDetalhe from './pages/LoteDetalhe';
import Lotes from './pages/Lotes';

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './components/DrawerContent';
import Home from './pages/Home';
import FluxoDeCaixa from './pages/FluxoDeCaixa';
import FluxoDeCaixaDetalhe from './pages/FluxoDeCaixaDetalhe';

export type RootDrawerParamList = {
    Home: undefined;
    'Lote detalhe': undefined;
    Lotes: undefined;
    Fluxos: undefined;
    'Fluxo detalhe': undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigation: React.FC = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={props => <DrawerContent {...props} />}
            drawerStyle={{ width: '80%' }}
            initialRouteName="Home"        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Lote detalhe" component={LoteDetalhe} />
            <Drawer.Screen name="Lotes" component={Lotes} />
            <Drawer.Screen name="Fluxos" component={FluxoDeCaixa} />
            <Drawer.Screen name="Fluxo detalhe" component={FluxoDeCaixaDetalhe} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;