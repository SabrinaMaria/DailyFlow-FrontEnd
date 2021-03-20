import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import LoteDetalhe from './pages/LoteDetalhe';
import Lotes from './pages/Lotes';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: true}}>
                <Screen name="Lote detalhe" component={LoteDetalhe} />
                <Screen name="Lotes" component={Lotes} />
            </Navigator>
        </NavigationContainer>
    )
}