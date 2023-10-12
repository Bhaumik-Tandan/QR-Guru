import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity,TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { calcHeight, calcWidth,getFontSizeByWindowWidth } from '../helper/res';

function isUrl(str) {
  str = str.toLowerCase();
  return /^(https?|ftp|file|data):\/\//.test(str) || str.includes('.');
}

const QRCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');

  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    requestCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    if(isUrl(data))
    Linking.openURL(data);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setScannedData('');
  };

  return (
    <View style={styles.container}>
      {scanned ? (
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
        <View style={styles.scannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
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
  scannerContainer: {
    width: 300,
    height: 300,
    overflow: 'hidden',
  },
  outputContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  outputText: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    padding: 8,
    marginVertical: 10,
  },
  scanAgainButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  scanAgainText: {
    color: 'white'
  },
  scannedText:{
    color: 'black',
    width: calcWidth(80),
    height: calcHeight(50),
    backgroundColor: 'white',
    marginBottom: calcHeight(5),
    fontSize: getFontSizeByWindowWidth(15),
  }
});

export default QRCodeScanner;
