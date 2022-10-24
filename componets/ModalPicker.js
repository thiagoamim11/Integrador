import React from "react";
import {
    StyleSheet,Text, View ,TouchableOpacity, Dimensions, ScrollView

} from 'react-native'

const OPTIONS=['red','blue','yellow','green']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalPicker = (props) => {
    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibilty(false)}
            style={styles.container}
        >
            <View style={[styles.modal,{width: WIDTH - 20, height: HEIGHT/2}]}>

            </View>
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    modal :{
        backgroundColor:'white',
        borderRadius:10,

    }

}) 

export {ModalPicker};