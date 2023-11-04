import React from "react";
import { calcWidth } from "../../helper/res";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PAGES from "../pages";

const ContactsProps = {
  icon: <MaterialIcons name="contacts" size={calcWidth(10)} color="blue" />,
  componentProps: {
    fields: [
      {
        name: "name",
        placeholder: "Name",
        type: "text",
        icon: <Feather name="user" size={calcWidth(8)} color="black" />,
      },
      {
        name: "phone",
        placeholder: "Phone Number",
        type: "text",
        icon: <MaterialIcons name="phone" size={calcWidth(8)} color="black" />,
      },
      {
        name: "email",
        placeholder: "Email",
        type: "text",
        icon: <AntDesign name="mail" size={calcWidth(8)} color="black" />,
      },
    ],
    generateQRContent: ({ name, phone, email }) => {
      const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
END:VCARD`;

      return vcard;
    },
  },
  topIcon: {
    icon: <AntDesign name="adduser" size={calcWidth(8)} color="black" />,
    navigateTo: PAGES.CONTACTS,
    label: "Select from Contacts",
  },
};

export default ContactsProps;
