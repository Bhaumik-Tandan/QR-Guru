import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import GeneratorNavigator from "./GeneratorNavigator";
import QRCodeScanner from "../screens/QRCodeScanner";
import PAGES from "../constants/pages";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { calcHeight, calcWidth,getFontSizeByWindowWidth } from "../helper/res";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: getFontSizeByWindowWidth(12), // Adjust the font size to your preference
            fontWeight: 'bold',
          },
          tabBarStyle: {
            height: calcHeight(10), // Adjust the height to your preference
          },
        }}
      >
        <Tab.Screen
          name={PAGES.GENERATOR_NAVIGATOR}
          component={GeneratorNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="qrcode" size={size+calcHeight(1)} color={color} />
            ),
            tabBarLabel: "Create",
          }}
        />
        <Tab.Screen
          name={PAGES.SCANNER}
          component={QRCodeScanner}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="line-scan" size={size+calcHeight(1)} color={color} />
            ),
            tabBarLabel: "Scan",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
