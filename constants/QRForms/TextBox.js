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
import PAGES from "../pages";
import GenerateButton from "../../component/GenerateButton";
import textStyle from "../textStyle";
import textContainerStyle from "../textContainerStyle";
import GenericQRForm from "../../component/GenericQRForm";

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


