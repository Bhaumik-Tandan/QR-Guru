import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { calcWidth } from "../../helper/res";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Website from "./Website";
import Wifi from "./Wifi";
import TextBox from "./TextBox";
import Phone from "./Phone";

const QRTypes = {
  "Website": {
    icon: <Foundation name="web" size={calcWidth(10)} color="blue" />,
    component: <Website />,
  },
  "Wifi": {
    icon: <AntDesign name="wifi" size={calcWidth(10)} color="blue" />,
    component: <Wifi />,
  },
  "Text": {
    icon: <Entypo name="text" size={calcWidth(10)} color="blue" />,
    component: <TextBox />,
  },
  "Contacts": {
    icon: <MaterialIcons name="contacts" size={calcWidth(10)} color="blue" />,
  },
  "Phone": {
    icon: <AntDesign name="phone" size={calcWidth(10)} color="blue" />,
    component: <Phone />,
  },
  "Email": {
    icon: <MaterialIcons name="email" size={calcWidth(10)} color="blue" />,
  },
  "SMS": {
    icon: <MaterialIcons name="sms" size={calcWidth(10)} color="blue" />,
  },
  "Calendar": {
    icon: <AntDesign name="calendar" size={calcWidth(10)} color="blue" />,
  },
  "My Card": {
    icon: <AntDesign name="idcard" size={calcWidth(10)} color="blue" />,
  },
  "Location": {
    icon: <Entypo name="location" size={calcWidth(10)} color="blue" />,
  },
  "Facebook": {
    icon: <AntDesign name="facebook-square" size={calcWidth(10)} color="blue" />,
  },
  "Instagram": {
    icon: <AntDesign name="instagram" size={calcWidth(10)} color="#d62976" />,
  },
  "Whatsapp": {
    icon: <FontAwesome5 name="whatsapp" size={calcWidth(10)} color="green" />,
  },
  "Youtube": {
    icon: <AntDesign name="youtube" size={calcWidth(10)} color="red" />,
  },
  "Twitter": {
    icon: <AntDesign name="twitter" size={calcWidth(10)} color="#00acee" />,
  },
  "Spotify": {
    icon: <Entypo name="spotify" size={calcWidth(10)} color="#1DB954" />,
  },
  "Paypal": {
    icon: <FontAwesome5 name="paypal" size={calcWidth(10)} color="#003087" />,
  },
  "Viber": {
    icon: <FontAwesome5 name="viber" size={calcWidth(10)} color="#665CAC" />,
  },
};


export default QRTypes;
