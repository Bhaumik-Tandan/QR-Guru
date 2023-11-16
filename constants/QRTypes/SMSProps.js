import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const SMSProps = {
  icon: <Feather name="message-circle" size={calcWidth(5)} color="#00FF00" />,
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
    getDisplayContent: ({ phone, message }) => {
      // Assuming there's a maximum character limit for the small place
      const maxCharacters = 50; // Adjust this based on your requirements

      // Truncate or format the message to fit the small place
      const truncatedMessage =
        message.length > maxCharacters
          ? `${message.slice(0, maxCharacters)}...`
          : message;

      // Create the display content as a plain string
      const displayContent = `${phone}\n${truncatedMessage}`;

      // You can return the display content or use it as needed
      return displayContent;
    },
  },
};

export default SMSProps;
