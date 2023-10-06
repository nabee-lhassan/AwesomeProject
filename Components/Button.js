import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'

export default function Button({title,changeProfile,inlineCss}) {
  return (
    <TouchableOpacity onPress={changeProfile} style={inlineCss}>
    
      <Text style={styles.buttonText}>{title}</Text>
    
  </TouchableOpacity>
  )
}









const styles = StyleSheet.create({

  button:{
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
    color:'blue',

  },


  buttonText:{
    color:'#0C8EE0',
  },


})