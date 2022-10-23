import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Avançar = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
       
      </Text>
      
      <Button style={styles.botao}
        title="AVANÇAR"
        onPress={() => Alert.alert('AVANÇAR')}
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

export default Avançar;