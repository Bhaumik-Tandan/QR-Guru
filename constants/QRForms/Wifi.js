import React from "react";
import {
  calcWidth,
} from "../../helper/res";
import { Feather } from "@expo/vector-icons";
import networkOptions from "../networkOptions";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import GenericQRForm from "../../component/GenericQRForm";


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

