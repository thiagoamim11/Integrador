import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import React from 'react';


const Total = () => {
    return(
        <SafeAreaView style={estilos.container}>


        <Text style={estilos.texto}>Total:R$ </Text>
        <View style={estilos.input}><TextInput style={estilos.te} placeholder=' 0,00'></TextInput></View>
        
       
        </SafeAreaView>
    );
}




export default Total;

const estilos = StyleSheet.create ({
    container: {
        paddingTop: 30,
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        height: 50,
        flexDirection: 'row',
        marginTop: 40,
        marginTop: -10,
                
        
    },

    texto:{
        color: 'green',
        paddingLeft: 20,
        
    },

    input:{
        
    }
});