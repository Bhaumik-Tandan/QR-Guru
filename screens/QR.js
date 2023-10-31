import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import QRDisplay from "../component/QRDisplay";
import { calcHeight, calcWidth } from "../helper/res";
import * as Sharing from "expo-sharing";
import getLocalImage from "../helper/getLocalImage";
import getQrDataFromImage from "../helper/getQrDataFromImage";
import IconButtons from "../component/IconButtons";
import saveFile from "../helper/saveFile";

export default function QRCodeGenerator({
  route: {
    params: { data },
  },
}) {
  const [qrCodeContent, setQRCodeContent] = useState("");
  const [logo, setLogo] = useState(null);
  const qrCodeView = useRef(null);

  useEffect(() => {
    setQRCodeContent(data);
  }, [data]);

  const clearLogo = () => {
    setLogo(null);
  };

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
  const saveQR = async () => {
    if (qrCodeView.current) {
      try {
        const uri = await qrCodeView.current.capture();
        saveFile(uri, "QRCode.png", "image/png");
      } catch (error) {
        console.error("Error capturing QR code:", error);
      }
    }
  }

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
      <QRDisplay
        qrCodeContent={qrCodeContent}
        logo={logo}
        qrCodeView={qrCodeView}
      />
      {qrCodeContent && (
        <IconButtons
          selectImage={selectImage}
          captureQrCode={captureQrCode}
          clearLogo={clearLogo}
          logo={logo}
          saveQR={saveQR}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: calcHeight(5),
    alignItems: "center",
    justifyContent: "center", // Center content vertically
  },
  input: {
    height: calcHeight(10),
    borderColor: "gray",
    borderWidth: calcWidth(0.25),
    marginBottom: calcHeight(2), // Add margin to the input
    paddingHorizontal: calcWidth(2),
    width: "100%",
    height: calcHeight(10),
  },
});
