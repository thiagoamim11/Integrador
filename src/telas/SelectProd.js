import React from "react";
import { StyleSheet, Text, View, Image,Button } from 'react-native';
//import Avançar from "./Avançar";


const SelectProd = () => {
    return(

        <View style={estilos.container}>
            
            
            <Text style={estilos.seleção}>Seleção de Produto</Text>
            
        </View>

        

    );
}

const estilos = StyleSheet.create({
    seleção: {
        display: 'flex',
        paddingLeft: 20,
        fontSize: 15,
        marginTop: -30,
           
    },

    container: {
        display: "flex",
        paddingTop: 80,
    }

});




export default SelectProd;