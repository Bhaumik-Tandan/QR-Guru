import React from "react";
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";

const YoutubeProps = {
  icon: <AntDesign name="youtube" size={calcWidth(10)} color="red" />,
  componentProps: {
    fields: [
      {
        name: "youtubeChannel",
        placeholder: "YouTube Channel or Video URL",
        type: "text",
        icon: <AntDesign name="play" size={calcWidth(8)} color="black" />,
      },
    ],
    generateQRContent: ({ youtubeChannel }) => {
      return youtubeChannel;
    },
  },
};

export default YoutubeProps;
