import { Entypo } from "@expo/vector-icons";
import { calcWidth } from "../../helper/res";
const TextBoxProps = {
  icon: <Entypo name="text" size={calcWidth(5)} color="brown" />,
  componentProps: {
    fields: [
      {
        name: "text",
        placeholder: "Please enter something",
        multiline: true,
      },
    ],
    generateQRContent: ({ text }) => text,
    getDisplayContent: ({ text }) => {
      text = text.replace(/\n/g, " ");
      return text.length > 30 ? text.substring(0, 30) + "..." : text;
    },
  },
};

export default TextBoxProps;
