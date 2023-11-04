import React from "react";
import { calcWidth } from "../../helper/res";
import { Entypo } from "@expo/vector-icons";

const PayPalProps = {
  icon: <Entypo name="paypal" size={calcWidth(10)} color="#003087" />,
  componentProps: {
    fields: [
      {
        name: "email",
        placeholder: "PayPal Email",
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
        return `https://www.paypal.com/paypalme/yourusername/${encodeURIComponent(
          email,
        )}/${amount}`;
      } else {
        return "";
      }
    },
  },
};

export default PayPalProps;
