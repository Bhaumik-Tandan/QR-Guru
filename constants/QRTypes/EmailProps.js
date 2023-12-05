import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const EmailProps = {
  icon: <Feather name="mail" size={calcWidth(5)} color="#000080" />,
  componentProps: {
    fields: [
      {
        name: "email",
        placeholder: "Email Address",
        type: "text",
        icon: <MaterialIcons name="email" size={calcWidth(8)} color="black" />,
      },
      {
        name: "subject",
        placeholder: "Subject (optional)",
        type: "text",
        icon: <MaterialIcons name="subject" size={calcWidth(8)} color="black" />,
      },
      {
        name: "content",
        placeholder: "Content (optional)",
        type: "text",
        icon: (
          <MaterialIcons name="description" size={calcWidth(8)} color="black" />
        ),
        multiline: true,
      },
    ],
    generateQRContent: ({ email, subject, content }) => {
      let qrContent = `mailto:${email}`;

      if (subject) {
        qrContent += `?subject=${encodeURIComponent(subject)}`;
      }

      if (content) {
        qrContent += `&body=${encodeURIComponent(content)}`;
      }

      return qrContent;
    },
    getDisplayContent: ({ email, subject, content }) => {
      // Define a maximum length for the message
      const maxMessageLength = 50; // You can adjust this based on your requirements

      // Combine email, subject, and content into a message
      const message = `${email} - ${subject || ""} - ${content || ""}`;

      // Remove line breaks from the message
      const cleanedMessage = message.replace(/\n/g, " ");

      // Trim the message if it's longer than the maximum length
      const truncatedMessage =
        cleanedMessage.length > maxMessageLength
          ? `${cleanedMessage.substring(0, maxMessageLength)}...`
          : cleanedMessage;

      // Your logic here to retrieve or generate display content based on the truncated message
      const displayContent = `Message: ${truncatedMessage}`;

      // You can return the display content or perform other operations
      return displayContent;
    },
  },
};

export default EmailProps;