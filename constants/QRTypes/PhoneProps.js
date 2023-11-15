import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";
import PAGES from "../pages";

const PhoneProps = {
  componentProps: {
    generateQRContent: ({ phone }) => `tel:${phone}`,
  },
  icon: <AntDesign name="phone" size={calcWidth(10)} color="blue" />,
  navigateTo: PAGES.PHONE,
};
export default PhoneProps;
