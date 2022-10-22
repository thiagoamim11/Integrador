import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

const input = () => {
  
  const [text, onChangeText] = React.useState("email@123.com");
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <SafeAreaView>
      <TextInput
        style={estilos.input}
        onChangeText={onChangeText}
        value={text}
        
      
      />

      
      <TextInput
        style={estilos.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Senha"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default input;