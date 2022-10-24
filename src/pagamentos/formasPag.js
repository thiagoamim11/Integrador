import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import React from 'react';




export default function FormasPagamento() {
    return(
        <SafeAreaView style={estilos.container}>
            <Text style={estilos.texto}>FormasPagamento</Text>

        </SafeAreaView>
    );
    
}

const estilos = StyleSheet.create ({
    container: {
        paddingTop: 30,
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 40,
        fontWeight: 'bold',
        
        
    },

    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 20,
        color: 'green',
    }
    
});