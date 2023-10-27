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
import QRForm from "../GenericQRForm";

export default function TextBox() {
  const [value, onChangeText] = useState("");
  const navigation = useNavigation();

  return (
    <QRForm
  iconName="phone-portrait-sharp"
  placeholder="Phone Number"
  generateQRContent={(value) => navigation.navigate(PAGES.QR, { data: `tel:${value}` })}
/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});
