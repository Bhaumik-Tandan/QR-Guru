import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Replace 'FontAwesome' with the icon library of your choice
import GeneratorNavigator from "./GeneratorNavigator";
import QRCodeScanner from "../screens/QRCodeScanner";
import PAGES from "../constants/pages";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={PAGES.SCANNER}
          component={QRCodeScanner}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="camera" size={size} color={color} /> // Replace 'camera' with the icon name you want to use
            ),
          }}
        />
        <Tab.Screen
          name={PAGES.GENERATOR_NAVIGATOR}
          component={GeneratorNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="qrcode" size={size} color={color} /> // Replace 'qrcode' with the icon name you want to use
            ),
            headerShown: false,
            tabBarLabel: "Generator",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
