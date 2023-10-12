import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Linking, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data); // Store the scanned data for display
    // go to link data
    Linking.openURL(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Scan QR Code</Text>
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      {scannedData && <Text>Scanned Data: {scannedData}</Text>}
      <Button title={'Tap to Scan Again'} onPress={() => {setScanned(false); setScannedData(null)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  scannerContainer: {
    width: 300, // Adjust as needed
    height: 300, // Adjust as needed
    overflow: 'hidden',
  },
});

export default QRCodeScanner;
