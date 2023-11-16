import React from "react";
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";

const FacebookProps = {
  icon: <AntDesign name="facebook-square" size={calcWidth(5)} color="blue" />,
  componentProps: {
    fields: [
      {
        name: "facebookID",
        placeholder: "Facebook Profile/Page ID",
        type: "text",
        icon: (
          <AntDesign name="facebook-square" size={calcWidth(8)} color="black" />
        ),
      },
    ],
    generateQRContent: ({ facebookID }) => {
      return `https://www.facebook.com/profile.php?id=${facebookID}`;
    },
  },
};

export default FacebookProps;
