import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../images/Logo.png';

export default function Carregamento() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Logo} />
            <Text style={styles.text}>DailyFlow</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00BFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#4169E1',
      fontSize: 50,
      textShadowColor: '#98FB98',
      fontWeight: 'bold',
    },
    image: {
        width: 270,
        height: 210,
    }
  });