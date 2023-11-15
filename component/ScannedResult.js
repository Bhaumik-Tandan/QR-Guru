import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import * as Linking from "expo-linking";
import copyToClipBoard from "../helper/copyToClipBoard";
import pushEvent from "../helper/pushEvent";
const ScannedResult = ({ scannedData, handleScanAgain }) => {
  useEffect(() => {
    pushEvent(`Scanned ${scannedData}`);
  }, []);

  const handleSearch = () => {
    Linking.openURL(`https://www.google.com/search?q=${scannedData}`);
  };
  const handleCopy = () => {
    copyToClipBoard(scannedData, "Copied to clipboard");
  };
  return (
    <View style={styles.container}>
      <Text
        style={styles.scannedOutput}
        selectable={true}
        selectionColor="orange"
      >
        {scannedData}
      </Text>
      <View style={styles.buttonContainer}>
        {renderIconButton("ios-scan-outline", "Scan Again", handleScanAgain)}
        {renderIconButton("ios-copy-outline", "Copy", handleCopy)}
        {renderIconButton("ios-search-sharp", "Search", handleSearch)}
      </View>
    </View>
  );
};

const renderIconButton = (iconName, text, onPress) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Ionicons name={iconName} size={24} color="black" />
    <Text selectable={true} style={styles.buttonText}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    marginTop: 5,
  },
  scannedOutput: {
    margin: 50,
    fontSize: getFontSizeByWindowWidth(15),
    padding: 20,
    backgroundColor: "white",
    width: calcWidth(80),
  },
});

export default ScannedResult;
