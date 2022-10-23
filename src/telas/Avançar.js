import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';

const Avançar = () => (
  
    <View style={estilo.container}>

      <View style={estilo.esquerdo}>
      <Button
         title="Avançar"
         color='green'

        onPress={() => Alert.alert('AVANÇAR!')}
      />
        </View>

      <View style={estilo.direito}>
        <Button
        title="Voltar"
        color="red"

        onPress={() => Alert.alert('VOLTOU!')}
      
        />

         </View>
      </View>

     
      
 
);

const estilo = StyleSheet.create({

 direito:{left:'100%'},
 esquerdo:{right:'10%'},
 container:{width:'35%'}

});





export default Avançar;