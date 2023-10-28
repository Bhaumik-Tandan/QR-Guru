import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../../constants/pages";
import GenerateButton from "../GenerateButton";
import textStyle from "../../constants/textStyle";
import textContainerStyle from "../../constants/textContainerStyle";
import GenericQRForm from "../GenericQRForm";

const textBox = {
  fields: [
    {
      name: "text",
      placeholder: "Please enter something",
      multiline: true,
    },
  ],
  generateQRContent: ({ text }) => text,
};

export default function TextBox() {

  return (
    <GenericQRForm {...textBox} />
  );
}


