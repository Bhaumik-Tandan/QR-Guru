import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import QR from '../component/QR';

export default function QRCodeGenerator() {
  const [qrCodeContent, setQRCodeContent] = useState('');

  useEffect(() => {
  }, [qrCodeContent]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text to generate QR code"
        onChangeText={text => {
          setQRCodeContent(text); // Update QR code content as text changes
        }}
        value={qrCodeContent}
      />


      <QR qrCodeContent={qrCodeContent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});
