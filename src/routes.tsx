import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import LoteDetalhe from './pages/LoteDetalhe';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: true}}>
                <Screen name="Lote: nome do lote" component={LoteDetalhe} />
            </Navigator>
        </NavigationContainer>
    )
}