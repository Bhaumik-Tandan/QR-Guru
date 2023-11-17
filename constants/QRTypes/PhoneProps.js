import React from "react";
import { Feather } from "@expo/vector-icons";
import { calcWidth } from "../../helper/res";
import PAGES from "../pages";

const PhoneProps = {
  componentProps: {
    generateQRContent: ({ phone }) => `tel:${phone}`,
  },
  icon: <Feather name="phone" size={calcWidth(5)} color="blue" />,
  navigateTo: PAGES.PHONE,
};
export default PhoneProps;
