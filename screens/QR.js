import React, { useState, useEffect } from "react";
import { StyleSheet} from "react-native";
import QRDisplay from "../component/QRDisplay";

export default function QRCodeGenerator({
  route: {
    params: { data },
  },
}) {
  const [qrCodeContent, setQRCodeContent] = useState("");

  useEffect(() => {
    setQRCodeContent(data);
  }, [data]);

  

  return (
      <QRDisplay
        qrCodeContent={qrCodeContent}
      />
  );
}

const styles = StyleSheet.create({
});
