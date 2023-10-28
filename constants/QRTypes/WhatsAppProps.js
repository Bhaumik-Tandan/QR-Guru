import React from "react";
import { calcWidth } from "../../helper/res";
import { FontAwesome5 } from "@expo/vector-icons";

const WhatsappProps = {
  icon: <FontAwesome5 name="whatsapp" size={calcWidth(10)} color="green" />,
  componentProps: {
    fields: [
      {
        name: "phone",
        placeholder: "Phone Number (with country code)",
        type: "text",
        icon: <FontAwesome5 name="phone" size={calcWidth(8)} color="black" />,
      },
      {
        name: "message",
        placeholder: "Initial Message (optional)",
        type: "text",
        optional: true,
        icon: <FontAwesome5 name="comment" size={calcWidth(8)} color="black" />,
      },
    ],
    generateQRContent: ({ phone, message }) => {
      let whatsappContent = `https://wa.me/${phone}`;

      if (message) {
        whatsappContent += `?text=${encodeURIComponent(message)}`;
      }

      return whatsappContent;
    },
  },
};

export default WhatsappProps;
