import React from "react";
import { calcWidth } from "../../helper/res";
import { AntDesign, Entypo } from "@expo/vector-icons";

const PinterestProps = {
  icon: <Entypo name="pinterest" size={calcWidth(10)} color="red" />,
  componentProps: {
    fields: [
      {
        name: "pinterestID",
        placeholder: "Pinterest Profile/Board ID",
        type: "text",
        icon: <AntDesign name="pinterest" size={calcWidth(8)} color="black" />,
      },
    ],
    generateQRContent: ({ pinterestID }) => {
      return `https://www.pinterest.com/${pinterestID}`;
    },
  },
};

export default PinterestProps;
