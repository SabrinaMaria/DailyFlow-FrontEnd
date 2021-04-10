import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoteDetalhe from './pages/LoteDetalhe';
import Lotes from './pages/Lotes';

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Lotes">
                <Stack.Screen name="Lote detalhe" component={LoteDetalhe} />
                <Stack.Screen name="Lotes" component={Lotes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}