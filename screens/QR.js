import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import QRDisplay from "../component/QRDisplay";
import defaultQRProps from "../constants/defaultQRProps";

export default function QRCodeGenerator({
  route: {
    params: { data, displayData, type, propOverRide, id },
  },
}) {
  const [qrCodeContent, setQRCodeContent] = useState("");
  const [qrProps, setQRProps] = useState(defaultQRProps);

  useEffect(() => {
    if (propOverRide) setQRProps(propOverRide);
  }, [propOverRide]);

  useEffect(() => {
    setQRCodeContent(data);
  }, [data]);

  return (
    <QRDisplay
      qrCodeContent={qrCodeContent}
      {...qrProps}
      displayData={displayData}
      type={type}
      id={id}
    />
  );
}
