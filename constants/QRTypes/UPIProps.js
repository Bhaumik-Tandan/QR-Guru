import React from "react";
import { calcWidth } from "../../helper/res";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";
import upiLogo from "../../assets/logo/upi.png";

const UPIProps = {
  icon: (
    <Image
      source={upiLogo}
      style={{
        width: calcWidth(10),
        height: calcWidth(10),
      }}
    />
  ),
  componentProps: {
    fields: [
      {
        name: "upiID",
        placeholder: "UPI ID",
        type: "text",
      },
      {
        name: "amount",
        placeholder: "Amount (Optional)",
        type: "text",
        optional: true,
      },
      {
        name: "note",
        placeholder: "Note (Optional)",
        type: "text",
        optional: true,
      },
    ],
    generateQRContent: ({ upiID, amount, note }) => {
      let upiContent = `upi://pay?pa=${upiID}`;

      if (amount) {
        upiContent += `&am=${amount}`;
      }

      if (note) {
        upiContent += `&tn=${encodeURIComponent(note)}`;
      }

      return upiContent;
    },
  },
};

export default UPIProps;
