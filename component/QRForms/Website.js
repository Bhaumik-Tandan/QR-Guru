import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet,TouchableOpacity,Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { calcHeight, calcWidth,getFontSizeByWindowWidth } from '../../helper/res';
import { useNavigation } from '@react-navigation/native';
import PAGES from '../../constants/pages';

export default function Website() {
    const [value, onChangeText] = useState('https://');
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Entypo name="link" size={24} color="black" />
      <TextInput
        style={styles.text}
        placeholder="Enter Website URL"
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
      <Button
        title="www."
        onPress={() => onChangeText((text)=>text+"www.")}
        
      />
      </View>
      <View style={styles.button}>
      <Button
        title=".com"
        onPress={() => onChangeText((text)=>text+".com")}
      />
      </View>
      </View>
      <TouchableOpacity style={styles.generateButton}
      onPress={() => navigation.navigate(PAGES.QR,{data:value})}
      >
      <Text style={styles.buttonText}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    textContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:calcHeight(2),
        padding:calcHeight(2),
        backgroundColor:"rgba(0,0,0,0.1)",
        width:"100%",
        borderRadius:calcHeight(1)
    },
    text:{
      width:"90%",
      marginLeft:calcWidth(5),
      fontSize:getFontSizeByWindowWidth(15)
    },
    buttonContainer:{
        flexDirection:"row",
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:calcHeight(5)
    },
    button:{
      marginHorizontal:calcWidth(5),
      backgroundColor:"rgba(0,0,0,0.1)",
      borderRadius:calcHeight(1),
    },
    generateButton:{
      marginVertical:calcHeight(10),
      backgroundColor:"blue",
      padding:calcHeight(2),
      borderRadius:calcHeight(2),
    },
    buttonText:{
      color:"white",
      fontSize:getFontSizeByWindowWidth(15)
    }
});