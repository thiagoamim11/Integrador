import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Reactnp from 'react';
import Header from './Header';
import Body from './Body';
import Input from './Input'
import Botao from './botao';



 const Principal = () => {
    return (
      <SafeAreaView>
      <Header/>
      <Body/>
      <Input/>
      <Botao/>
      </SafeAreaView>
    );
}

export default Principal;