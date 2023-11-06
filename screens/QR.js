import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import QRDisplay from "../component/QRDisplay";
import QRTab from "../component/QRTab";
import defaultQRProps from "../constants/defaultQRProps";

export default function QRCodeGenerator({
  route: {
    params: { data },
  },
}) {
  const [qrCodeContent, setQRCodeContent] = useState("");
  const [qrProps, setQRProps] = useState(defaultQRProps);

  useEffect(() => {
    setQRCodeContent(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <QRTab qrData={qrCodeContent} qrProps={qrProps} setQRProps={setQRProps} />
      <QRDisplay qrCodeContent={qrCodeContent} {...qrProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
