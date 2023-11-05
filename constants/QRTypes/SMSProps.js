import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const SMSProps = {
  icon: <AntDesign name="message1" size={calcWidth(10)} color="#00FF00" />,
  componentProps: {
    fields: [
      {
        name: "phone",
        placeholder: "Phone Number (optional)",
        type: "text",
        icon: <MaterialIcons name="phone" size={calcWidth(8)} color="black" />,
        optional: true,
      },
      {
        name: "message",
        placeholder: "Message Body",
        type: "text",
        icon: (
          <MaterialIcons name="message" size={calcWidth(8)} color="black" />
        ),
        multiline: true,
      },
    ],
    generateQRContent: ({ phone, message }) => {
      let qrContent = "sms:";

      if (phone) {
        qrContent += phone;
      }

      if (message) {
        if (phone) {
          qrContent += `?`;
        }
        qrContent += `&body=${encodeURIComponent(message)}`;
      }

      return qrContent;
    },
  },
};

export default SMSProps;
