import { Device } from "react-native";
import WebsiteProps from "./WebsiteProps";
import WifiProps from "./WifiProps";
import TextBoxProps from "./TextBoxProps";
import PhoneProps from "./PhoneProps";
import ContactsProps from "./ContactsProps";
import EmailProps from "./EmailProps";
import SMSProps from "./SMSProps";
import CalendarProps from "./CalendarProps";
import MyCardProps from "./MyCardProps";
import LocationProps from "./LocationProps";
import FacebookProps from "./FaceBookProps";
import InstagramProps from "./InstagramProps";
import WhatsappProps from "./WhatsAppProps";
import YoutubeProps from "./YoutubeProps";
import TwitterProps from "./TwitterProps";
import SpotifyProps from "./SpotifyProps";
import PayPalProps from "./PayPal";
import UPIProps from "./UPIProps";

export const QRTypesWithCategory = {
  "Basic":{
  Text: TextBoxProps,
  Contacts: ContactsProps,
  Phone: PhoneProps,
  Location: LocationProps,
  Website: WebsiteProps,
  Wifi: WifiProps,
  Email: EmailProps,
  SMS: SMSProps,
  Calendar: CalendarProps,
  "My Card": MyCardProps
  },
  Payment:{
  UPI: UPIProps,
  PayPal: PayPalProps,
  },
  "Social Media":{
  Facebook: FacebookProps,
  Instagram: InstagramProps,
  Whatsapp: WhatsappProps,
  Youtube: YoutubeProps,
  Twitter: TwitterProps,
  Spotify: SpotifyProps,
  },
};



const QRTypes = {};

Object.keys(QRTypesWithCategory).forEach((category) => {
  Object.keys(QRTypesWithCategory[category]).forEach((type) => {
    QRTypes[type] = QRTypesWithCategory[category][type];
  });
}
);

export default QRTypes;
