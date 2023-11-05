import React from "react";
import { calcWidth } from "../../helper/res";
import { Entypo,AntDesign } from "@expo/vector-icons";

const ApplePayProps = {
  icon: <AntDesign name="apple1"  size={calcWidth(10)} color="#000" />,
  componentProps: {
    fields: [
      {
        name: "email",
        placeholder: "Apple Pay Email",
        type: "email",
        icon: <Entypo name="mail" size={calcWidth(8)} color="black" />,
      },
      {
        name: "amount",
        placeholder: "Amount",
        type: "number",
        icon: <Entypo name="credit" size={calcWidth(8)} color="black" />,
      },
    ],
    generateQRContent: ({ email, amount }) => {
      if (email && amount) {
        return `https://www.apple.com/apple-pay/${encodeURIComponent(email)}/${amount}`;
      } else {
        return "";
      }
    },
  },
};

export default ApplePayProps;
