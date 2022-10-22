import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';


const Body = () => {
    return(
        <>
       
        <View style={estilos.container}>
            
            <Text style={estilos.login}>Usuario</Text>
        </View>
      

        </>

        
    );
}

const estilos = StyleSheet.create({
    login: {
        display: 'flex',
        paddingLeft: 12,
        marginBottom: 0,
        fontSize: 15,
        
        
    },

    

    container: {
        display: "flex",
        paddingTop: 130,
    }
});

export default Body;