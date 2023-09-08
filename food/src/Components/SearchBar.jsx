import React, { useState } from 'react'
import { TextInput, Text, Button, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
export default function SearchBar({term, onTermChange, onTermSubmit}) {
   
  return (
    <View style={styles.viewStyle}>
        <AntDesign name="search1" size={30} color="black"  />

        <TextInput 
        autoCapitalize='none'
        value={term} 
        placeholder='Click Here to Search'
         style={styles.inputStyle}
         onEndEditing={onTermSubmit}
         onChangeText={onTermChange} / >
          
    </View>
  )
}
const styles = StyleSheet.create({
    viewStyle : {
        borderColor : 'black',
            borderWidth : 1,
            borderRadius : 40,
            margin : '5%',
            height : 50,
            paddingLeft : 25,
            backgroundColor : 'white',
            flexDirection : 'row',
            alignItems : 'center'
    },
    inputStyle : {
        marginLeft : 10,
        fontSize : 20
    }
})
