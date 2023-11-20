import React from "react";
import { calcWidth } from "../../helper/res";
import { Fontisto,AntDesign } from '@expo/vector-icons'; 

const AppleMusicProps = {
  icon: <Fontisto name="applemusic" size={calcWidth(5)} color="#ff445c" />,
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
