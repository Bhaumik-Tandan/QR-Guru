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
      <FlatList
        data={Object.keys(QRTypesWithCategory)}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={{
                borderRadius: calcHeight(2),
                marginVertical: calcHeight(1),
                padding: calcHeight(2),
              }}>
              <TouchableOpacity
                style={styles.categoryTitleContainer}
                onPress={() => toggleCategory(item)}
              >
                <Text style={styles.categoryTitle}>{item+" QR Codes"}</Text>
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
              </View>
              {expandedCategories[item] && (
                <FlatList
                  data={Object.keys(QRTypesWithCategory[item])}
                  numColumns={3}
                  keyExtractor={(subItem) => subItem}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item: subItem }) => {
                    return (
                      <View style={styles.item}>
                      <TouchableOpacity
                      style={styles.icon}
                        onPress={() =>
                          navigation.navigate(PAGES.GENERATOR_FORM, {
                            type: subItem,
                          })
                        }
                      >
                        {QRTypes[subItem].icon}
                        
                      </TouchableOpacity>
                      <Text style={styles.iconTitle}>{subItem}</Text>
                      </View>
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

const iconSize = 18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  item: {
    padding: calcHeight(2),
    alignItems: "center",
    justifyContent: "center",
    width: calcWidth(iconSize+11),
    height: calcWidth(iconSize+5),
    marginVertical: calcHeight(2),
  },
  icon:{
    backgroundColor: "#fff",
    padding: calcHeight(2),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: calcHeight(iconSize),
    width: calcWidth(iconSize),
    height: calcWidth(iconSize),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,

  },
  iconTitle: {
    fontSize: getFontSizeByWindowWidth(12),
    textAlign: "center",
    fontWeight: "bold",
  },
  categoryTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: getFontSizeByWindowWidth(20),
    fontWeight: "bold",
  },
});
