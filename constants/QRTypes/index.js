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
import ProductProps from "./ProductProps";
import CouponProps from "./CouponProps";
import ApplePayProps from "./ApplePayProps";
import AppleMusicProps from "./AppleMusicProps";
import LinkedInProps from "./LinkedInProps";
import PinterestProps from "./PininterestProps";
export const QRTypesWithCategory = {
  "Basic":{
  Text: TextBoxProps,
  Contacts: ContactsProps,
  Phone: PhoneProps,
  Location: LocationProps,
  Website: WebsiteProps,
  Email: EmailProps,
  Wifi: WifiProps,
  SMS: SMSProps,
  Calendar: CalendarProps,
  "My Card": MyCardProps,
  Product: ProductProps,
  Coupon: CouponProps,
  },
  Payment:{
  "Apple Pay":ApplePayProps,
  UPI: UPIProps,
  PayPal: PayPalProps,
  },
  "Social Media":{
  Facebook: FacebookProps,
  Instagram: InstagramProps,
  Twitter: TwitterProps,
  WhatsApp: WhatsappProps,
  LinkedIn: LinkedInProps,
  Pinterest:PinterestProps,
  Youtube: YoutubeProps,
  Spotify: SpotifyProps,
  "Apple Music": AppleMusicProps,
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
