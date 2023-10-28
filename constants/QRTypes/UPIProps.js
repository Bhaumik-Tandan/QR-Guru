import React from "react";
import { calcWidth } from "../../helper/res";
import { FontAwesome } from "@expo/vector-icons";

const UPIProps = {
  icon: <FontAwesome name="money" size={calcWidth(10)} color="green" />,
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
