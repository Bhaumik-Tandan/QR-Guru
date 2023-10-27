import React from "react";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../../constants/pages";
import GenericQRForm from "../GenericQRForm";

export default function TextBox() {
  const navigation = useNavigation();

  return (
    <GenericQRForm
  iconName="phone-portrait-sharp"
  placeholder="Phone Number"
  generateQRContent={(value) => navigation.navigate(PAGES.QR, { data: `tel:${value}` })}
/>
  );
}


