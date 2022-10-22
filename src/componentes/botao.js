import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Botao = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
       
      </Text>
      
      <Button style={styles.botao}
        title="Entrar"
        onPress={() => Alert.alert('Simple Button pressed')}
      />


    </View>
    
   
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: -160,
    display: "flex",
    height: 10,
    
    
  },

 

  title: {
    textAlign: 'center',
    marginVertical: 8,
    
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    
  },
});

export default Botao;