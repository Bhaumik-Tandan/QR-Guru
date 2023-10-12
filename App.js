import * as React from 'react';
import TabNavigator from './navigator/TabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';




export default function App() {
  return (
    <SafeAreaProvider
            style={{
                paddingTop:
                    Platform === 'android' ? Constants.statusBarHeight : 0,
            }}
        >
            <StatusBar style="auto" />
    <TabNavigator />
    </SafeAreaProvider>
  );
}