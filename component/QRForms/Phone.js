import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import {
  calcHeight,
  calcWidth,
  getFontSizeByWindowWidth,
} from "../../helper/res";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../../constants/pages";
import GenerateButton from "../GenerateButton";
import textStyle from "../../constants/textStyle";
import textContainerStyle from "../../constants/textContainerStyle";

export default function TextBox() {
  const [value, onChangeText] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={textContainerStyle}>
      <Ionicons name="phone-portrait-sharp" size={calcWidth(8)} color="black" />
        <TextInput
          style={textStyle}
          placeholder="Phone Number"
          onChangeText={(text) => onChangeText(text)}
          value={value}
          multiline={true}
        />
      </View>
      <GenerateButton
        onPress={() => navigation.navigate(PAGES.QR, { data: `tel:${value}` })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});
