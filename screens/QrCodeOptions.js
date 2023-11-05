import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { calcHeight, calcWidth,getFontSizeByWindowWidth } from "../helper/res";
import PAGES from "../constants/pages";
import QRTypes from "../constants/QRTypes";
import { MaterialIcons } from "@expo/vector-icons";

export default function QRCodeOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate(PAGES.SCANNER)
              }
            >
              <MaterialIcons name="qr-code-scanner" size={24} color="black" />
              <Text style={styles.iconTitle}>Scanner</Text>
            </TouchableOpacity>
      <FlatList
        data={Object.keys(QRTypes)}
        numColumns={3}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate(PAGES.GENERATOR_FORM, {
                  type: item,
                })
              }
            >
              {QRTypes[item].icon}
              <Text style={styles.iconTitle}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Center content vertically,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  item: {
    backgroundColor: "#fff",
    padding: calcHeight(2),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: calcHeight(23),
    width: calcWidth(23),
    height: calcWidth(23),
    marginHorizontal: calcHeight(2),
    marginVertical: calcHeight(3),
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowColor: "#000",
  },
  iconTitle: {
    fontSize: getFontSizeByWindowWidth(10),
    fontWeight: "bold",
    textAlign: "center",
  },
});
