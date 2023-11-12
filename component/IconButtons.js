import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { EvilIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import { useNavigation } from "@react-navigation/native";

// ... (your imports)

const IconButtons = ({
  selectImage,
  captureQrCode,
  clearLogo,
  logo,
  downloadQR,
  editQR,
  saveQR,
}) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
      <IconItem
        icon={<AntDesign name="edit" size={calcWidth(8)} color="black" />}
        text="Edit"
        onPress={editQR}
      />

      <IconItem
        icon={<EvilIcons name="image" size={calcWidth(10)} color="black" />}
        text="Add logo"
        onPress={selectImage}
      />

      {Platform.OS === "android" && (
        <IconItem
          icon={
            <Ionicons name="ios-download" size={calcWidth(10)} color="black" />
          }
          text="Download"
          onPress={downloadQR}
        />
      )}

      <IconItem
        icon={<AntDesign name="save" size={calcWidth(10)} color="black" />}
        text="Save"
        onPress={saveQR}
      />

      <IconItem
        icon={
          <EvilIcons name="share-apple" size={calcWidth(10)} color="black" />
        }
        text="Share"
        onPress={captureQrCode}
      />

      {logo && (
        <IconItem
          icon={<FontAwesome name="remove" size={calcWidth(10)} color="red" />}
          text="Remove logo"
          onPress={clearLogo}
        />
      )}
    </TouchableOpacity>
  );
};

const IconItem = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconItem}>
      {icon}
      <Text style={styles.iconText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: calcHeight(5),
    width: "100%",
  },
  iconItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {},
});

export default IconButtons;
