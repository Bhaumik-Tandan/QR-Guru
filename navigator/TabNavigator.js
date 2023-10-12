import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRCodeScanner from '../QRCodeScanner';
import QRCodeGenerator from '../QrCodeGenerator';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="QRCodeGenerator" component={QRCodeGenerator} />
        <Tab.Screen name="QRCodeScanner" component={QRCodeScanner} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;