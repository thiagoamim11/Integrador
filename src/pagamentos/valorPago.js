import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import React from 'react';






export default function ValorPago(){

    const [text, onChangeText] = React.useState(null);

    return(
        <SafeAreaView style={estilos.container}>
            <Text style={estilos.texto}>Valor pago</Text>
            <TextInput
            style={estilos.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="R$: 0,00"
            keyboardType="text"

      
      />

        </SafeAreaView>
    );
}


const estilos = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1, //esse comando cria borda
      padding: 10,
      width: '40%'
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },

    texto: {
        fontSize: 20,
        paddingVertical: 17,
        paddingLeft: 15,
        
    }

});
