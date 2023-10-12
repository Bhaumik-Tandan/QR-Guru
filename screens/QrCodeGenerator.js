import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { QRCode } from 'react-native-custom-qr-codes-expo';

export default function QRCodeGenerator() {
  const [value, onChangeText] = useState('');
  const [qrCodeContent, setQRCodeContent] = useState('');

  const generateQRCode = () => {
    setQRCodeContent(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text to generate QR code"
        onChangeText={text => onChangeText(text)}
        value={value}
      />

      <Button title="Generate QR Code" onPress={generateQRCode} />

      {qrCodeContent && (
        <QRCode
          content={qrCodeContent}
          codeStyle='circle'
          outerEyeStyle='circle'
          innerEyeStyle='circle'
          size={250}
          color='black'
          backgroundColor='blue'
          padding={10}
          linearGradient={['rgb(255,0,0)','rgb(0,255,255)']}
        />
      )}
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
