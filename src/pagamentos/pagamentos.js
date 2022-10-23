import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, FlatList } from 'react-native';
import React from 'react';





const Pagamentos = () => {
    return (
        <SafeAreaView style={estilos.container}>
            <Text style={estilos.texto}>Vendedor: </Text>
            <TextInput style={estilos.input} placeholder='Fulano'></TextInput>            
            <Text style={estilos.texto}>Cliente </Text>
            <TextInput style={estilos.input} placeholder='Alterar'></TextInput> 
            
            
            
          </SafeAreaView>

          
        
    );

}

export default Pagamentos;


const estilos = StyleSheet.create ({
    container: {
        paddingTop: 30,
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        height: 50,
        flexDirection: 'row',
        marginTop: 40,
        
        
    },

    input: {
        fontSize: 15,
        marginRight: 120,
    },

    texto: {
        marginLeft: 15
    }
})

