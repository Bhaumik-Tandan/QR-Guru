import React from "react";
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";

const TwitterProps = {
  icon: <AntDesign name="twitter" size={calcWidth(10)} color="#00acee" />,
  componentProps: {
    fields: [
      {
        name: "twitterUsername",
        placeholder: "Twitter Username or Tweet URL",
        type: "text",
        icon: <AntDesign name="user" size={calcWidth(8)} color="black" />,
      },
    ],
    generateQRContent: ({ twitterUsername }) => {
      return `https://twitter.com/${twitterUsername}`;
    },
  },
};

export default TwitterProps;
