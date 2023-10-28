
import { Entypo } from "@expo/vector-icons";
import {
  calcWidth,
} from "../../helper/res";
import { Foundation } from "@expo/vector-icons";

const WebsiteProps={
  icon: <Foundation name="web" size={calcWidth(10)} color="blue" />,
    componentProps:{
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

}

export default WebsiteProps;

