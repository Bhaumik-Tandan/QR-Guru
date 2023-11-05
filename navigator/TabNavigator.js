import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Replace 'FontAwesome' with the icon library of your choice
import GeneratorNavigator from "./GeneratorNavigator";
import QRCodeScanner from "../screens/QRCodeScanner";
import PAGES from "../constants/pages";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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
          name={PAGES.GENERATOR_NAVIGATOR}
          component={GeneratorNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="qrcode" size={size} color={color} /> // Replace 'qrcode' with the icon name you want to use
            ),
            headerShown: false,
            tabBarLabel: "Create",
            tabBarLabelStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name={PAGES.SCANNER}
          component={QRCodeScanner}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="line-scan" size={size} color={color} /> // Replace 'camera' with the icon name you want to use
            ),
            tabBarLabel: "Scan",
            tabBarLabelStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
