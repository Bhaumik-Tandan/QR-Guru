import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QRCodeGenerator from "../screens/QrCodeOptions";
import QRGenerationForm from "../screens/QRGenerationForm";
import PAGES from "../constants/pages";
import QR from "../screens/QR";
import BannerAd from "../component/BannerAd";
import Contacts from "../screens/CustomForms/Contacts";
const Stack = createNativeStackNavigator();

function GeneratorNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PAGES.GENERATOR_OPTIONS}
        component={QRCodeGenerator}
        options={{
          header: () => <BannerAd />,
        }}
      />
      <Stack.Screen
        name={PAGES.GENERATOR_FORM}
        component={QRGenerationForm}
        options={{ headerShown: false }}
      />

      <Stack.Screen name={PAGES.CONTACTS} component={Contacts} />
      <Stack.Screen name={PAGES.QR} component={QR} />
    </Stack.Navigator>
  );
}

export default GeneratorNavigator;
