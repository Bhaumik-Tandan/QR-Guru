import React from "react";
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";

const InstagramProps = {
  icon: <AntDesign name="instagram" size={calcWidth(10)} color="#d62976" />,
  componentProps: {
    fields: [
      {
        name: "instagramUsername",
        placeholder: "Instagram Username",
        type: "text",
        icon: <AntDesign name="user" size={calcWidth(8)} color="black" />,
      },
    ],
    generateQRContent: ({ instagramUsername }) => {
      return `https://www.instagram.com/${instagramUsername}`;
    },
  },
};

export default InstagramProps;
