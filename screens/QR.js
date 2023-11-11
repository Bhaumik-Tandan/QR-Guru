import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import QRDisplay from "../component/QRDisplay";
import defaultQRProps from "../constants/defaultQRProps";
import QRTab from "../component/QRTab";

export default function QRCodeGenerator({
  route: {
    params: { data, displayData, type,propOverRide },
  },
}) {
  const [qrCodeContent, setQRCodeContent] = useState("");
  const [qrProps, setQRProps] = useState(defaultQRProps);

  useEffect(() => {  
    if(propOverRide)
setQRProps(propOverRide);
}
,[propOverRide]);

  useEffect(() => {
    setQRCodeContent(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <QRDisplay
        qrCodeContent={qrCodeContent}
        {...qrProps}
        displayData={displayData}
        type={type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
