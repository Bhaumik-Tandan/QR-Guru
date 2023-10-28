import { Entypo } from "@expo/vector-icons";
import { calcWidth } from "../../helper/res";
const TextBoxProps= {
  icon: <Entypo name="text" size={calcWidth(10)} color="blue" />,
  componentProps: {
  fields: [
    {
      name: "text",
      placeholder: "Please enter something",
      multiline: true,
    },
  ],
  generateQRContent: ({ text }) => text,
}
};

export default TextBoxProps;

