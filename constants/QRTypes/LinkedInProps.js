import React from "react";
import { calcWidth } from "../../helper/res";
import { AntDesign } from "@expo/vector-icons";

const LinkedInProps = {
  icon: <AntDesign name="linkedin-square" size={calcWidth(10)} color="blue" />,
  componentProps: {
    fields: [
      {
        name: "linkedinID",
        placeholder: "LinkedIn Profile/Company ID",
        type: "text",
        icon: (
          <AntDesign name="linkedin-square" size={calcWidth(8)} color="black" />
        ),
      },
    ],
    generateQRContent: ({ linkedinID }) => {
      return `https://www.linkedin.com/in/${linkedinID}`;
    },
  },
};

export default LinkedInProps;
