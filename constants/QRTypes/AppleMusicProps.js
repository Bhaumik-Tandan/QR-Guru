import React from "react";
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";

const AppleMusicProps = {
  icon: <AntDesign name="apple1" size={calcWidth(10)} color="black" />,
  componentProps: {
    fields: [
      {
        name: "appleMusicID",
        placeholder: "Apple Music Profile/Playlist ID",
        type: "text",
        icon: <AntDesign name="apple1" size={calcWidth(8)} color="white" />,
      },
    ],
    generateQRContent: ({ appleMusicID }) => {
      return `https://music.apple.com/profile/${appleMusicID}`;
    },
  },
};

export default AppleMusicProps;
