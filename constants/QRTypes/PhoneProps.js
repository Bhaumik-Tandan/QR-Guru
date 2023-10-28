import React from "react";
import { Ionicons } from '@expo/vector-icons'; 
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";

const PhoneProps={
  componentProps:{fields:[
    {
      name:"phone",
      placeholder:"Phone Number",
      multiline:false,
      icon:<Ionicons name="phone-portrait-sharp" size={calcWidth(8)} color="black" />
    }
  ],
  generateQRContent:({phone})=>`tel:${phone}`
},
icon: <AntDesign name="phone" size={calcWidth(10)} color="blue" />
}
export default PhoneProps;

