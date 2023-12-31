import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { calcHeight } from "../helper/res";
import QR from "./QR";

function areValuesEqual(obj1, obj2) {
  for (const key in obj2) {
    if (key === "name") continue;
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

function QRCodeTabItem({ qrProps, option, qrData, setQRProps, sync }) {
  return (
    <TouchableOpacity
      onPress={() => setQRProps({ ...qrProps, ...option })}
      style={{
        ...styles.qrCodeItem,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            borderColor: areValuesEqual(qrProps, option)
              ? "green"
              : "transparent",
            borderWidth: calcHeight(0.2),
            padding: calcHeight(0.5),
          }}
        >
          <QR
            qrCodeContent={qrData}
            {...(sync ? qrProps : {})}
            {...option}
            size={calcHeight(15)}
          />
        </View>
        <Text style={styles.optionName}>{option.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  qrCodeItem: {
    margin: calcHeight(1),
  },
  container: {
    alignItems: "center", // Align items in the center vertically
  },
  optionName: {
    alignSelf: "center",
  },
});

export default QRCodeTabItem;
