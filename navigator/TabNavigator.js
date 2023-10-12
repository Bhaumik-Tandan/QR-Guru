import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the icon library of your choice
import BannerAd from "../component/BannerAd";
import QRCodeGenerator from '../screens/QrCodeGenerator';
import QRCodeScanner from '../screens/QRCodeScanner';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: () => (
              <BannerAd /> 
          ),
        }}
      >
        <Tab.Screen
          name="Scanner"
          component={QRCodeScanner}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="camera" size={size} color={color} /> // Replace 'camera' with the icon name you want to use
            ),
          }}
        />
        <Tab.Screen
          name="Generator"
          component={QRCodeGenerator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="qrcode" size={size} color={color} /> // Replace 'qrcode' with the icon name you want to use
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
