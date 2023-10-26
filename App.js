import * as React from 'react';
import TabNavigator from './navigator/TabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();



export default function App() {
  return (
    <SafeAreaProvider
            style={{
                paddingTop:Constants.statusBarHeight
            }}
        >
            <StatusBar style="auto" />
    <TabNavigator />
    </SafeAreaProvider>
  );
}