import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import GenerateButton from "./GenerateButton";
import textStyle from "../constants/textStyle";
import textContainerStyle from "../constants/textContainerStyle";
import { calcWidth } from "../helper/res";

export default function GenericQRForm({ icon, placeholder, generateQRContent }) {
  const [value, onChangeText] = useState("");

  const handleGenerateQR = () => {
    generateQRContent(value);
  };

  return (
    <View style={styles.container}>
      <View style={textContainerStyle}>
       {icon}
        <TextInput
          style={textStyle}
          placeholder={placeholder}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          multiline={true}
        />
      </View>
      <GenerateButton onPress={handleGenerateQR} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});
