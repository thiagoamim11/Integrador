import React, { useState } from "react";
import { StyleSheet, Text, View, Image,Button,SafeAreaView,TouchableOpacity,ScrollView,Modal,Animated} from 'react-native';
import { ModalPicker } from "../../componets/ModalPicker";


const SelectProd = () => {
    const[chooseData,setstate]= useState('Cliente');
    const[isModalVisible,setisModalVisible]= useState(false);
    const changeModalVisibilty = (bool)=>{setisModalVisible(bool)}
    const[chooseData1,setstate1]= useState('Categoria');
    const[chooseData2,setstate2]= useState('Produto');
    return(

        <SafeAreaView style={estilos.container}>
        
            <Text style={estilos.seleção}>Seleção de Produto</Text>
            <TouchableOpacity
            onPress={() => changeModalVisibility(true)}
             style={estilos.touchableOpacity}
            >

                <Text style={estilos.text}>{chooseData}</Text>
         
            </TouchableOpacity>

            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibilty(false)}
             >
                <ModalPicker
                 changeModalVisibilty={changeModalVisibilty}
                
                />

                </Modal>
                    
            
            <TouchableOpacity style={estilos.touchableOpacity1}>

               <Text style={estilos.text}>{chooseData1}</Text>
        
            </TouchableOpacity>

            <TouchableOpacity style={estilos.touchableOpacity2}>

                <Text style={estilos.text}>{chooseData2}</Text>

            </TouchableOpacity>


            


    
        </SafeAreaView>

    );
}

const estilos = StyleSheet.create({
    seleção: {
        display: 'flex',
        alignContent:'center',
        justifyContent:'center',
        paddingLeft: 20,
        fontSize: 20,
        marginTop: -30,   
    },

    container: {
        display: "flex",
        paddingTop: 80,
        alignItems:'center',   
    },


    text:{
        marginVertical : 10,
        fontSize: 15,
        color:'black',
        
    },
    
    touchableOpacity: {
        
        backgroundColor: '#60CA4E',
        alignSelf: 'stretch',
        flexDirection:'column',
        paddingHorizontal: 10,
        marginVertical:10,
        borderRadius:100,
        alignItems:'center',
        
        



    },

    touchableOpacity1: {
        
        backgroundColor: '#60CA4E',
        alignSelf: 'stretch',
        flexDirection:'column',
        paddingHorizontal: 10,
        marginVertical:10,
        borderRadius:100,
        alignItems:'center',
        

    },

    touchableOpacity2: {
        
        backgroundColor: '#60CA4E',
        alignSelf: 'stretch',
        flexDirection:'column',
        paddingHorizontal: 10,
        marginVertical:10,
        borderRadius:100,
        alignItems:'center',
        

    },
             
    
    

});




export default SelectProd;