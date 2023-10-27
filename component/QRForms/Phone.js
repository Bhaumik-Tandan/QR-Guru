import React from "react";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../../constants/pages";
import QRForm from "../GenericQRForm";

export default function TextBox() {
  const navigation = useNavigation();

  return (
    <QRForm
  iconName="phone-portrait-sharp"
  placeholder="Phone Number"
  generateQRContent={(value) => navigation.navigate(PAGES.QR, { data: `tel:${value}` })}
/>
  );
}


