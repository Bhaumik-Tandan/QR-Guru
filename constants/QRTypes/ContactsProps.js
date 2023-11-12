import React from "react";
import { calcWidth } from "../../helper/res";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PAGES from "../pages";

const ContactsProps = {
  icon: <MaterialIcons name="contacts" size={calcWidth(10)} color="#472731" />,
  componentProps: {
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
  navigateTo: PAGES.CONTACTS,
};

export default ContactsProps;
