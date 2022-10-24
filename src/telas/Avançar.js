import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';

const Avançar = () => (

  <View style={estilo.container}>

      <View style={estilo.direito}>
      <Button
         title="Avançar"
         color='green'
         onPress={() => Alert.alert('AVANÇAR!')}
         />

         </View>  

      <View style={estilo.esquerdo}>  
      <Button
        title="Voltar"
        color="red"
        onPress={() => Alert.alert('VOLTOU!')}
        />
       </View>  

      </View>
      

     
      
 
);

const estilo = StyleSheet.create({

direito : {
  
  

},

 esquerdo : {
  
  paddingRight:190,
  
  
  
 },

 container : {
 justifyContent:'center',
 marginHorizontal:16,
 flexDirection:'row-reverse',
 marginVertical:650,
 
 
 },

  
 
}); 


export default Avançar;

