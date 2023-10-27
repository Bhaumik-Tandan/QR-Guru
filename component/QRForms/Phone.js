import React from "react";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../../constants/pages";
import GenericQRForm from "../GenericQRForm";
import { Ionicons } from '@expo/vector-icons'; 
import { calcWidth } from "../../helper/res";
export default function Phone() {
  const navigation = useNavigation();

  return (
    <GenericQRForm
  icon={ <Ionicons name="phone-portrait-sharp" size={calcWidth(8)} color="black" />}
  placeholder="Phone Number"
  generateQRContent={(value) => navigation.navigate(PAGES.QR, { data: `tel:${value}` })}
/>
  );
}


