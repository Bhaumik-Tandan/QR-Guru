import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import PAGES from "../constants/pages";
import QRTypes,{ QRTypesWithCategory} from "../constants/QRTypes"; // Import QRTypes and QRTypesWithCategory
import { MaterialIcons } from "@expo/vector-icons";

export default function QRCodeOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate(PAGES.SCANNER)}
      >
        <MaterialIcons name="qr-code-scanner" size={24} color="black" />
        <Text style={styles.iconTitle}>Scanner</Text>
      </TouchableOpacity>
      <FlatList
        data={Object.keys(QRTypesWithCategory)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.categoryTitle}>{item}</Text>
              <FlatList
                data={Object.keys(QRTypesWithCategory[item])}
                numColumns={3}
                keyExtractor={(subItem) => subItem}
                renderItem={({ item: subItem }) => {
                  return (
                    <TouchableOpacity
                      style={styles.item}
                      onPress={() =>
                        navigation.navigate(PAGES.GENERATOR_FORM, {
                          type: subItem,
                        })
                      }
                    >
                      {QRTypes[subItem].icon} 
                      <Text style={styles.iconTitle}>{subItem}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
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
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  item: {
    backgroundColor: "#fff",
    padding: calcHeight(2),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: calcHeight(25),
    width: calcWidth(25),
    height: calcWidth(25),
    marginHorizontal: calcHeight(1),
    marginVertical: calcHeight(1),
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  iconTitle: {
    fontSize: getFontSizeByWindowWidth(10),
    textAlign: "center",
  },
  categoryTitle: {
    fontSize: getFontSizeByWindowWidth(14),
    fontWeight: "bold",
    marginTop: calcHeight(5),
    marginBottom: calcHeight(2),
  },
});
