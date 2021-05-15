import React from 'react';
import LoteDetalhe from './pages/LoteDetalhe';
import Lotes from './pages/Lotes';

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './components/DrawerContent';
import Home from './pages/Home';
import FluxoDeCaixa from './pages/FluxoDeCaixa';

export type RootDrawerParamList = {
    Home: undefined;
    'Lote detalhe': undefined;
    Lotes: undefined;
    Fluxo: undefined;
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
            <Drawer.Screen name="Fluxo" component={FluxoDeCaixa} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;