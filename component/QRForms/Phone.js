import React from "react";
import GenericQRForm from "../GenericQRForm";
import { Ionicons } from '@expo/vector-icons'; 
import { calcWidth } from "../../helper/res";

const phone={
  fields:[
    {
      name:"phone",
      placeholder:"Phone Number",
      multiline:false,
      icon:<Ionicons name="phone-portrait-sharp" size={calcWidth(8)} color="black" />
    }
  ],
  generateQRContent:({phone})=>`tel:${phone}`
}
export default function Phone() {

  return (
    <GenericQRForm {...phone}
/>
  );
}


