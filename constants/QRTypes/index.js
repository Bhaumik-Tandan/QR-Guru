import WebsiteProps from "./WebsiteProps";
import WifiProps from "./WifiProps";
import TextBoxProps from "./TextBoxProps";
import PhoneProps from "./PhoneProps";
import ContactsProps from "./ContactsProps";
import EmailProps from "./EmailProps";
import SMSProps from "./SMSProps";
import CalendarProps from "./CalendarProps";
import MyCardProps from "./MyCardProps";

const QRTypes = {
  Website: WebsiteProps,
  Wifi: WifiProps,
  Text: TextBoxProps,
  Contacts: ContactsProps,
  Phone: PhoneProps,
  Email: EmailProps,
  SMS: SMSProps,
  "Calendar": CalendarProps,
  "My Card": MyCardProps,
  // "Location": {
  //   icon: <Entypo name="location" size={calcWidth(10)} color="blue" />,
  // },
  // "Facebook": {
  //   icon: <AntDesign name="facebook-square" size={calcWidth(10)} color="blue" />,
  // },
  // "Instagram": {
  //   icon: <AntDesign name="instagram" size={calcWidth(10)} color="#d62976" />,
  // },
  // "Whatsapp": {
  //   icon: <FontAwesome5 name="whatsapp" size={calcWidth(10)} color="green" />,
  // },
  // "Youtube": {
  //   icon: <AntDesign name="youtube" size={calcWidth(10)} color="red" />,
  // },
  // "Twitter": {
  //   icon: <AntDesign name="twitter" size={calcWidth(10)} color="#00acee" />,
  // },
  // "Spotify": {
  //   icon: <Entypo name="spotify" size={calcWidth(10)} color="#1DB954" />,
  // },
  // "Paypal": {
  //   icon: <FontAwesome5 name="paypal" size={calcWidth(10)} color="#003087" />,
  // },
  // "Viber": {
  //   icon: <FontAwesome5 name="viber" size={calcWidth(10)} color="#665CAC" />,
  // },
};

export default QRTypes;
