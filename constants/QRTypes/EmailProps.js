import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons, Feather } from "@expo/vector-icons";

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
    getDisplayContent: ({ email, subject }) => {
      // Define a maximum length for the subject
      const maxSubjectLength = 20; // You can adjust this based on your requirements

      // Trim the subject if it's longer than the maximum length
      const trimmedSubject =
        subject.length > maxSubjectLength
          ? `${subject.substring(0, maxSubjectLength)}...`
          : subject;

      // Your logic here to retrieve or generate display content based on email and subject
      const displayContent = `${email}\n${trimmedSubject}`;

      // You can return the display content or perform other operations
      return displayContent;
    },
  },
};

export default EmailProps;
