import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import QRDisplay from "../component/QRDisplay";
import defaultQRProps from "../constants/defaultQRProps";
import BannerAd from "../component/BannerAd";
import Loader from "../component/Loader";

export default function QRCodeGenerator({
  route: {
    params: { data, displayData, type, propOverRide, id },
  },
}) {
  const [qrCodeContent, setQRCodeContent] = useState("");
  const [qrProps, setQRProps] = useState(defaultQRProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (propOverRide) setQRProps(propOverRide);
  }, [propOverRide]);

  useEffect(() => {
    setQRCodeContent(data);
    setTimeout(() => { 
      setLoading(false);
    }, 0); 
  }, [data]);

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={{ flex: 1 }}>
      <QRDisplay
        qrCodeContent={qrCodeContent}
        {...qrProps}
        displayData={displayData}
        type={type}
        id={id}
      />
      <BannerAd />
    </View>
  );
}
