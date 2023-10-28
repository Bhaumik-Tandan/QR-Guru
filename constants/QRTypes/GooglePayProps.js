import React from "react";
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";

const GooglePayProps = {
  icon: <AntDesign name="google" size={calcWidth(10)} color="green" />,
  componentProps: {
    fields: [
      {
        name: "gpayID",
        placeholder: "Google Pay UPI ID",
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
    generateQRContent: ({ gpayID, amount, note }) => {
      let gpayContent = `upi://pay?pa=${gpayID}`;

      if (amount) {
        gpayContent += `&am=${amount}`;
      }

      if (note) {
        gpayContent += `&tn=${encodeURIComponent(note)}`;
      }

      return gpayContent;
    },
  },
};

export default GooglePayProps;
