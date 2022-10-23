import { StyleSheet, Text, View, Image, SafeAreaView,Button } from 'react-native';
import Avançar from './Avançar';
import SelectProd from './SelectProd';

const Body = () => {
    return (
        <SafeAreaView>
            
            <SelectProd/>
            <Avançar/>
            
        </SafeAreaView>    
    );
}

export default Body;