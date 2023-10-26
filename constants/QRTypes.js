import { Foundation } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { calcWidth } from '../helper/res';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 


const QRTypes = [
    {
        title:"Website",
        icon:<Foundation name="web" size={calcWidth(10)} color="blue" />
    },
    {
        title:"Wifi",
        icon:<AntDesign name="wifi" size={calcWidth(10)} color="blue" />
    },
    {
        title:"Text",
        icon:<Entypo name="text" size={calcWidth(10)} color="blue" />

    },
    {
        title:"Contacts",
        icon:<MaterialIcons name="contacts" size={calcWidth(10)} color="blue" />
    },
    {
        title:"Phone",
        icon:<AntDesign name="phone" size={calcWidth(10)} color="blue" />
    },
    {
        title:"Email",
        icon:<MaterialIcons name="email" size={calcWidth(10)} color="blue" />
    },
    {
        title:"SMS",
        icon:<MaterialIcons name="sms" size={calcWidth(10)} color="blue" />
    },
    {
        title:"Calendar",
        icon:<AntDesign name="calendar" size={calcWidth(10)} color="blue" />
    },
    {
        title:"My Card",
        icon:<AntDesign name="idcard" size={calcWidth(10)} color="blue" />
    },
    {
        title:"Location",
        icon:<Entypo name="location" size={calcWidth(10)} color="blue" />
    },
    {
        title:"Facebook",
        icon:<AntDesign name="facebook-square" size={calcWidth(10)} color="blue" />
    },
    {
        title:"Instagram",
        icon:<AntDesign name="instagram" size={calcWidth(10)} color="#d62976" />
    },
    {
        title:"Whatsapp",
        icon:<FontAwesome5 name="whatsapp" size={calcWidth(10)} color="green" />
    },
    {
        title:"Youtube",
        icon:<AntDesign name="youtube" size={calcWidth(10)} color="red" />
    },
    {
        title:"Twitter",
        icon:<AntDesign name="twitter" size={calcWidth(10)} color="#00acee" />
    },
    {
        title:"Spotifiy",
        icon:<Entypo name="spotify" size={calcWidth(10)} color="#1DB954" />
    },
    {
        title:"Paypal",
        icon:<FontAwesome5 name="paypal" size={calcWidth(10)} color="#003087" />
    },
    {
        title:"Viber",
        icon:<FontAwesome5 name="viber" size={calcWidth(10)} color="#665CAC" />
    }
];

export default QRTypes;