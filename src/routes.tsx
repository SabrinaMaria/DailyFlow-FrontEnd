import React from 'react';

/* import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
*/
import LoteDetalhe from './pages/LoteDetalhe';
import Lotes from './pages/Lotes';
/*
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Lotes">
                <Stack.Screen name="Lote detalhe" component={LoteDetalhe} />
                <Stack.Screen name="Lotes" component={Lotes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
} */

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './components/DrawerContent';
import Home from './pages/Home';

export type RootDrawerParamList = {
    Home: undefined;
    'Lote detalhe': undefined;
    Lotes: undefined;
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
            initialRouteName="Lotes"        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Lote detalhe" component={LoteDetalhe} />
            <Drawer.Screen name="Lotes" component={Lotes} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;