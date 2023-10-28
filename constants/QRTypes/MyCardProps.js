import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const MyCardProps = {
  icon: <AntDesign name="user" size={calcWidth(10)} color="blue" />,
  componentProps: {
    fields: [
      {
        name: "name",
        placeholder: "Full Name",
        type: "text",
        icon: <MaterialIcons name="person" size={calcWidth(8)} color="black" />,
      },
      {
        name: "phone",
        placeholder: "Phone Number",
        type: "text",
        icon: <MaterialIcons name="phone" size={calcWidth(8)} color="black" />,
      },
      {
        name: "email",
        placeholder: "Email Address",
        type: "text",
        icon: <MaterialIcons name="email" size={calcWidth(8)} color="black" />,
      },
      {
        name: "birthday",
        placeholder: "Birthday (YYYY-MM-DD)",
        type: "text",
        icon: <MaterialIcons name="event" size={calcWidth(8)} color="black" />,
        optional: true,
      },
      {
        name: "jobTitle",
        placeholder: "Job Title (optional)",
        type: "text",
        icon: <MaterialIcons name="work" size={calcWidth(8)} color="black" />,
        optional: true,
      },
      {
        name: "note",
        placeholder: "Note (optional)",
        type: "text",
        icon: <MaterialIcons name="note" size={calcWidth(8)} color="black" />,
        optional: true,
        multiline: true,
      },
    ],
    generateQRContent: ({ name, phone, email, birthday, jobTitle, note }) => {
      let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}`;

      if (birthday) {
        vcard += `\nBDAY:${birthday}`;
      }

      if (jobTitle) {
        vcard += `\nTITLE:${jobTitle}`;
      }

      if (note) {
        vcard += `\nNOTE:${note}`;
      }

      vcard += "\nEND:VCARD";

      return vcard;
    },
  },
};

export default MyCardProps;
