import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Pagamentos from './pagamentos'
import Total from './total';
import FormasPagamento from './formasPag';
import ValorPago from './valorPago';

export default function Main() {
    return(

        <View>
            <Pagamentos/>
            <FormasPagamento/>
            <Total/>
            <ValorPago/>
        
        
        </View>
    );
}

