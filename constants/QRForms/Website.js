
import { Entypo } from "@expo/vector-icons";
import {
  calcHeight,
  calcWidth,
  getFontSizeByWindowWidth,
} from "../../helper/res";
import GenericQRForm from "../../component/GenericQRForm";

const website={
  fields:[
    {
      name:"website",
      placeholder:"Enter Website URL",
      icon:<Entypo name="link" size={calcWidth(8)} color="black" />,
      buttons:[
        {
          title:"www.",
          value:"www."
        },
        {
          title:".com",
          value:".com"
        }
      ],
      initialValue:"https://"
    }
  ],
  generateQRContent:({website})=>website
}

export default function Website() {

  return (
    <GenericQRForm {...website}/>
  );
}
