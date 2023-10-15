import React, { useState, useRef } from 'react';
import { View,ScrollView, StyleSheet, TextInput, TouchableOpacity,Text } from 'react-native';
import QR from '../component/QR';
import { calcHeight } from '../helper/res';
import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import { EvilIcons,AntDesign } from '@expo/vector-icons'; 
import getLocalImage from '../helper/getLocalImage';
import * as FileSystem from 'expo-file-system';    
import getQrDataFromImage from '../helper/getQrDataFromImage';  
import { FontAwesome } from '@expo/vector-icons';               

export default function QRCodeGenerator() {
  const [qrCodeContent, setQRCodeContent] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(null);
  const qrCodeView = useRef(null);

  const clearBackgroundImage = () => {
    setBackgroundImage(null);
  };

  const shareQrCode = async (imageUri) => {
    const cacheUri = `${FileSystem.cacheDirectory}qrCode.jpg`;

    await FileSystem.copyAsync({ from: imageUri, to: cacheUri });

    const shareOptions = {
      title: 'Share QR Code',
      url: cacheUri,
      message: 'QR Code generated by your app',
    };

    try {
      const shared = await Sharing.shareAsync(cacheUri, shareOptions);

      if (shared.action === Sharing.sharedAction) {
        console.log('Shared successfully');
      } else {
        console.error('Error sharing:', shared.error);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const captureQrCode = async () => {
    if (qrCodeView.current) {
      try {
        const uri = await qrCodeView.current.capture();
        console.log('Image saved to', uri);
        shareQrCode(uri);
      } catch (error) {
        console.error('Error capturing QR code:', error);
      }
    }
  };

  const validateQrCodeContent = async () => {
    if (qrCodeView.current) {
      try {
        const uri = await qrCodeView.current.capture();
        const qrData=await getQrDataFromImage(uri);
        if(qrData.length==0){
          alert("Image is not fit for QR code");
        }
      } catch (error) {
        console.error('Error capturing QR code:', error);
      }
    }
  }

  async function selectImage() {
    try {
      const localImageUri = await getLocalImage();
      setBackgroundImage(localImageUri);
      setTimeout(() => {
      validateQrCodeContent();
      }, 1000);
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text to generate QR code"
        onChangeText={(text) => setQRCodeContent(text)}
        value={qrCodeContent}
        numberOfLines={10}
      />


      <ViewShot options={{ format: 'jpg', quality: 0.9 }} ref={qrCodeView} style={{backgroundColor:"#fff"}} >
        {backgroundImage ? (
          <QR qrCodeContent={qrCodeContent} backgroundImage={{ uri: backgroundImage }} />
        ) : (
          <QR qrCodeContent={qrCodeContent} />
        )}
      </ViewShot>
      {qrCodeContent && (
  <View style={styles.iconContainer}>
    <TouchableOpacity
      style={{ flex: 1, justifyContent: 'center',
      alignItems: 'center' }}
      onPress={selectImage}
    >
      <EvilIcons name="image" size={50} color="black" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ flex: 1,justifyContent: 'center',
      alignItems: 'center' }}
      onPress={captureQrCode}
    >
     <AntDesign name="sharealt" size={50} color="black"  />
    </TouchableOpacity>
    {backgroundImage && (
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={clearBackgroundImage}
            >
              <FontAwesome name="remove" size={50} color="red" />
            </TouchableOpacity>
          )}
  </View>
)}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: calcHeight(10), // Add margin to the input
    paddingHorizontal: 10,
    width: '100%',
    height: calcHeight(10),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: calcHeight(5), // Add margin above the icons
    width: '100%'
  },
});
