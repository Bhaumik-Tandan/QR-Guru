import QR from "../component/QR";
import ViewShot from "react-native-view-shot";
import React, { useState, useRef, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { calcHeight, calcWidth } from "../helper/res";
import * as Sharing from "expo-sharing";
import getLocalImage from "../helper/getLocalImage";
import getQrDataFromImage from "../helper/getQrDataFromImage";
import IconButtons from "../component/IconButtons";
import saveFile from "../helper/saveFile";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../constants/pages";
import {setLocalStoreData,getLocalStoreData} from "../helper/localStorage";
import {SAVED_QR} from "../constants/localStorageKeys";
import getUUID from "../helper/getUUID";
const QRDisplay = ({ qrCodeContent, displayData, type,savedId, ...otherProps }) => {
  const [logo, setLogo] = useState(null);
  const qrCodeView = useRef(null);
  const navigation = useNavigation();
  const clearLogo = () => {
    setLogo(null);
  };

  const saveQrCode = async () => {
    const qrData={
      displayData,
      type,
      props:otherProps,
      data:qrCodeContent,
      id:savedId?savedId:getUUID(),
    };

    const savedQrCodes=await getLocalStoreData(SAVED_QR);


    if(savedQrCodes){
      const index=savedQrCodes.findIndex((item)=>item.id==qrData.id);
      if(index!=-1){
        savedQrCodes[index]=qrData;
        await setLocalStoreData(SAVED_QR,savedQrCodes);
      }
      else{
        await setLocalStoreData(SAVED_QR,[...savedQrCodes,qrData]);
      }

    }else{
      await setLocalStoreData(SAVED_QR,[qrData]);
    }

    alert("QR Code Saved");
  }

  const editQR = ()=>{
    navigation.navigate(PAGES.QR_EDIT,{
      data:qrCodeContent,
      propOverRide:otherProps,
      type:type,
      displayData:displayData,
    })}


  const shareQrCode = async (imageUri) => {
    const shareOptions = {
      title: "Share QR Code",
      url: imageUri,
      message: "QR Code generated by QR Express",
    };

    try {
      await Sharing.shareAsync(imageUri, shareOptions);
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const captureQrCode = async () => {
    if (qrCodeView.current) {
      try {
        const uri = await qrCodeView.current.capture();
        shareQrCode(uri);
      } catch (error) {
        console.error("Error capturing QR code:", error);
      }
    }
  };

  const validateQrCodeContent = async () => {
    if (qrCodeView.current) {
      try {
        const uri = await qrCodeView.current.capture();
        const qrData = await getQrDataFromImage(uri);
        if (qrData.length == 0) {
          alert("Image is not fit for QR code");
        }
      } catch (error) {
        console.error("Error capturing QR code:", error);
      }
    }
  };
  const downloadQR = async () => {
    if (qrCodeView.current) {
      try {
        const uri = await qrCodeView.current.capture();
        saveFile(uri, "QRCode.png", "image/png");
      } catch (error) {
        console.error("Error capturing QR code:", error);
      }
    }
  };

  async function selectImage() {
    try {
      const localImageUri = await getLocalImage();
      setLogo(localImageUri);
      setTimeout(() => {
        validateQrCodeContent();
      }, 1000);
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{type}</Text>
      <ViewShot
        options={{ format: "jpg", quality: 0.9 }}
        ref={qrCodeView}
        style={{ backgroundColor: "#fff" }}
      >
        <QR
          qrCodeContent={qrCodeContent}
          logo={{ uri: logo }}
          {...otherProps}
        />
      </ViewShot>
      <Text>{displayData}</Text>
      <IconButtons
        selectImage={selectImage}
        captureQrCode={captureQrCode}
        clearLogo={clearLogo}
        logo={logo}
        downloadQR={downloadQR}
        editQR={editQR}
        saveQR={saveQrCode}
      />
    </ScrollView>
  );
};

export default QRDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: calcHeight(15),
    alignItems: "center",
    justifyContent: "center", // Center content vertically
    width: calcWidth(100),
  },
});
