import React from "react";
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";
import twitterLogo from "../../assets/logo/twitter.png";
import { Image } from "react-native";

const TwitterProps = {
  icon: (
    <Image
      source={twitterLogo}
      style={{
        width: calcWidth(10),
        height: calcWidth(10),
      }}
    />
  ),
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
