import { Entypo } from "@expo/vector-icons";
import { calcWidth } from "../../helper/res";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WebsiteProps = {
  icon: (
    <MaterialCommunityIcons name="web" size={calcWidth(5)} color="black" />
  ),
  componentProps: {
    fields: [
      {
        name: "website",
        placeholder: "Enter Website URL",
        icon: <Entypo name="link" size={calcWidth(8)} color="black" />,
        buttons: [
          {
            title: "www.",
            value: "www.",
          },
          {
            title: ".com",
            value: ".com",
          },
        ],
        initialValue: "https://",
      },
    ],
    generateQRContent: ({ website }) => website,
    getDisplayContent: ({ website: url }) => {
      url = url.replace(/(^\w+:|^)\/\//, "");

      return url.length > 30 ? url.substring(0, 30) + "..." : url;
    },
  },
};

export default WebsiteProps;
