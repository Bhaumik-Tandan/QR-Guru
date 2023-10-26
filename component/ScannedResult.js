import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";

const ScannedResult = ({ scannedData, handleScanAgain }) => {
  return (
    <View style={styles.outputContainer}>
      <TextInput
        value={scannedData}
        style={styles.scannedText}
        selectTextOnFocus={true}
        multiline={true}
        numberOfLines={10}
        textAlignVertical={"center"}
        textAlign="center"
      />
      <TouchableOpacity
        style={styles.scanAgainButton}
        onPress={handleScanAgain}
      >
        <Text selectable={true} style={styles.scanAgainText}>
          Scan Again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outputContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  scanAgainButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  scanAgainText: {
    color: "white",
  },
  scannedText: {
    color: "black",
    width: calcWidth(80),
    height: calcHeight(50),
    backgroundColor: "white",
    marginBottom: calcHeight(5),
    fontSize: getFontSizeByWindowWidth(15),
  },
});

export default ScannedResult;
