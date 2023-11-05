import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import PAGES from "../constants/pages";
import QRTypes, { QRTypesWithCategory } from "../constants/QRTypes";

export default function QRCodeOptions({ navigation }) {
  const [expandedCategories, setExpandedCategories] = useState(Object.keys(QRTypesWithCategory).reduce((acc, category) => {
      acc[category] = true;
      return acc;
    }, {}),
  );

  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category],
    });
  };

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
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.categoryTitleContainer}
                onPress={() => toggleCategory(item)}
              >
                <Text style={styles.categoryTitle}>{item}</Text>
                <MaterialIcons
                  name={
                    expandedCategories[item]
                      ? "keyboard-arrow-up"
                      : "keyboard-arrow-down"
                  }
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              {expandedCategories[item] && (
                <FlatList
                  data={Object.keys(QRTypesWithCategory[item])}
                  numColumns={3}
                  keyExtractor={(subItem) => subItem}
                  showsVerticalScrollIndicator={false}
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
              )}
            </View>
          );
        }}
      />
    </View>
  );
}

const iconSize = 23;

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
    borderRadius: calcHeight(iconSize),
    width: calcWidth(iconSize),
    height: calcWidth(iconSize),
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
  categoryTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: getFontSizeByWindowWidth(14),
    fontWeight: "bold",
    marginTop: calcHeight(5),
    marginBottom: calcHeight(2),
  },
});
