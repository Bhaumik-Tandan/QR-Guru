import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QRCodeGenerator from "../screens/QrCodeOptions";
import QRGenerationForm from "../screens/QRGenerationForm";
import PAGES from "../constants/pages";
const Stack = createNativeStackNavigator();

function GeneratorNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PAGES.GENERATOR_OPTIONS}
        component={QRCodeGenerator}
      />
      <Stack.Screen name={PAGES.GENERATOR_FORM} component={QRGenerationForm} />
    </Stack.Navigator>
  );
}

export default GeneratorNavigator;
