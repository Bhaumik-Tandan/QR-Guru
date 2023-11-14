import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons,Feather } from "@expo/vector-icons";

const EmailProps = {
  icon: <Feather name="mail" size={calcWidth(10)} color="#000080" />,
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
        icon: (
          <MaterialIcons name="subject" size={calcWidth(8)} color="black" />
        ),
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
  },
};

export default EmailProps;
