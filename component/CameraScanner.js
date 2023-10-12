import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Camera, FlashMode } from 'expo-camera';
import QRIndicator from './QRIndicator';
import QRFooterButton from './QRFooterButton';
import { calcHeight, calcWidth } from '../helper/res';
import * as BarCodeScanner from 'expo-barcode-scanner';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CameraScanner = ({ handleBarCodeScanned, isLit, setIsLit }) => {
    const { bottom } = useSafeAreaInsets();
  return (
    <View style={styles.scannerContainer}>
      <Camera
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
        flashMode={isLit ? FlashMode.torch : FlashMode.off}
      />
      <QRIndicator />
      <View style={[styles.footer, { bottom: 30 + bottom }]}>
        <QRFooterButton onPress={() => setIsLit((isLit) => !isLit)} isActive={isLit} iconName="ios-flashlight" />
        <QRFooterButton onPress={()=>alert("Feature to be added")} iconName="ios-images" iconSize={48} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scannerContainer: {
    width: calcWidth(100),
    height: calcHeight(100),
    overflow: 'hidden',
    zIndex: 1,
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
  },
});

export default CameraScanner;
