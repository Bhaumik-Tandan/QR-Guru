import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRCodeScanner from '../QRCodeScanner';
import QRCodeGenerator from '../QrCodeGenerator';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Generator" component={QRCodeGenerator} />
        <Tab.Screen name="Scanner" component={QRCodeScanner} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;