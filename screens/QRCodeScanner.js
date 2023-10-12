import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity, TextInput, Button } from 'react-native';
import * as BarCodeScanner from 'expo-barcode-scanner';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../helper/res';
import CameraScanner from '../component/CameraScanner';

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
        <View style={styles.outputContainer}>
          <TextInput
            value={scannedData}
            style={styles.scannedText}
            selectTextOnFocus={true}
            multiline={true}
            numberOfLines={10}
            textAlignVertical={'center'}
            textAlign='center'
          />

          <TouchableOpacity style={styles.scanAgainButton} onPress={handleScanAgain}>
            <Text selectable={true} style={styles.scanAgainText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
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
  },
  outputContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  scanAgainButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  scanAgainText: {
    color: 'white'
  },
  scannedText: {
    color: 'black',
    width: calcWidth(80),
    height: calcHeight(50),
    backgroundColor: 'white',
    marginBottom: calcHeight(5),
    fontSize: getFontSizeByWindowWidth(15),
  }
});

export default QRCodeScanner;
