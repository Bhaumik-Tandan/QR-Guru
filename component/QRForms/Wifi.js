import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
  calcHeight,
  calcWidth,
  getFontSizeByWindowWidth,
} from "../../helper/res";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import PAGES from "../../constants/pages";
import networkOptions from "../../constants/networkOptions";
import GenerateButton from "../GenerateButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import getWifiString from "../../utils/stringGenerator/getWifiString";
import textContainerStyle from "../../constants/textContainerStyle";
import textStyle from "../../constants/textStyle";
import GenericQRForm from "../GenericQRForm";


const wifi={
  fields:[
      {
        "name":"name",
        "placeholder":"Network Name (SSID)",
        "type":"text",
        "icon":<Feather name="wifi" size={calcWidth(8)} color="black" />,
      },
      {
          "name":"networkType",
          "type":"picker",
          "options":networkOptions,
          "icon":<MaterialIcons name="security" size={calcWidth(8)} color="black" />,
          "placeholder":{ label: "Select Security Type", value: "WPA" }
      },
      {
          "name":"password",
          "placeholder":"Password",
          "type":"text",
          "icon":<Entypo name="lock" size={calcWidth(8)} color="black" />
      }
  ],
  generateQRContent:({name, networkType="", password}) =>{
    let wifiString = `WIFI:S:${name};T:${networkType};`;
  
    if (networkType.toLowerCase() !== "none") {
      wifiString += `P:${password};`;
    }
  
    return wifiString;
  }
}

export default function Wifi() {

  return (
    <GenericQRForm {...wifi} />
  );
}

