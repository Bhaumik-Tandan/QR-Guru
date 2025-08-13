import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import GeneratorNavigator from "./GeneratorNavigator";
import QRCodeScanner from "../screens/QRCodeScanner";
import PAGES from "../constants/pages";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import SavedQrCodes from "../screens/SavedQrCodes";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: getFontSizeByWindowWidth(12),
            fontWeight: "bold",
          },
          tabBarStyle: {
            height: calcHeight(10),
          },
        }}
      >
        <Tab.Screen
          name={PAGES.GENERATOR_NAVIGATOR}
          component={GeneratorNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="qrcode" size={size + calcHeight(1)} color={color} />
            ),
            tabBarLabel: "Create",
          }}
        />
        <Tab.Screen
          name={PAGES.SCANNER}
          component={QRCodeScanner}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="line-scan"
                size={size + calcHeight(1)}
                color={color}
              />
            ),
            tabBarLabel: "Scan",
          }}
        />
        <Tab.Screen
          name={PAGES.SAVED_QR_CODES}
          component={SavedQrCodes}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="bookmark" size={size + calcHeight(1)} color={color} />
            ),
            tabBarLabel: "Saved",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
