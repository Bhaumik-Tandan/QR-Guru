import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity, TextInput, Button } from 'react-native';
import * as BarCodeScanner from 'expo-barcode-scanner';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../helper/res';
import CameraScanner from '../component/CameraScanner';
import ScannedResult from '../component/ScannedResult';

function isUrl(str) {
  str = str.toLowerCase();
  return /^(https?|ftp|file|data):\/\//.test(str) || str.includes("//");
}

const QRCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const checkCameraPermission = async () => {
      const { status } = await BarCodeScanner.getPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    checkCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    if (isUrl(data)) Linking.openURL(data);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setScannedData('');
  };

  return (
    <View style={styles.container}>
      {!hasPermission ? (
        <Button title="Allow Camera Permission" onPress={requestCameraPermission} />
      ) : scanned ? (
        <ScannedResult scannedData={scannedData} handleScanAgain={handleScanAgain} />
      ) : (
        <CameraScanner
          handleBarCodeScanned={handleBarCodeScanned}
          isLit={isLit}
          setIsLit={setIsLit}
        />

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default QRCodeScanner;