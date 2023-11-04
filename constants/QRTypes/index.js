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

const QRTypes = {
  Website: WebsiteProps,
  Wifi: WifiProps,
  Text: TextBoxProps,
  Contacts: ContactsProps,
  Phone: PhoneProps,
  Email: EmailProps,
  SMS: SMSProps,
  Calendar: CalendarProps,
  UPI: UPIProps,
  PayPal: PayPalProps,
  "My Card": MyCardProps,
  Location: LocationProps,
  Facebook: FacebookProps,
  Instagram: InstagramProps,
  Whatsapp: WhatsappProps,
  Youtube: YoutubeProps,
  Twitter: TwitterProps,
  Spotify: SpotifyProps,
};

export default QRTypes;
