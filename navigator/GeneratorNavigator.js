import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QRCodeGenerator from "../screens/QrCodeOptions";
import QRGenerationForm from "../screens/QRGenerationForm";
import PAGES from "../constants/pages";
import QR from "../screens/QR";
import Contacts from "../screens/CustomForms/Contacts";
import LocationPicker from "../screens/CustomForms/Location";
import QREdit from "../screens/QREdit";
import Phone from "../screens/CustomForms/Phone";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { calcHeight } from "../helper/res";
const Stack = createNativeStackNavigator();

function GeneratorNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PAGES.GENERATOR_OPTIONS}
        component={QRCodeGenerator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={PAGES.GENERATOR_FORM} component={QRGenerationForm} />

      <Stack.Screen name={PAGES.CONTACTS} component={Contacts} />
      <Stack.Screen name={PAGES.LOCATION} component={LocationPicker} />
      <Stack.Screen name={PAGES.QR} component={QR} />
      <Stack.Screen
        name={PAGES.QR_EDIT}
        component={QREdit}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PAGES.PHONE}
        component={Phone}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                navigation.navigate(PAGES.CONTACTS);
              }}
            >
              <AntDesign name="contacts" size={calcHeight(3)} color="black" />
              <Text>Contacts</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default GeneratorNavigator;
