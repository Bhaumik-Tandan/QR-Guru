import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PAGES from "../constants/pages";
import QRTypes, { QRTypesWithCategory } from "../constants/QRTypes";
import getClipBoard from "../helper/getClipBoard";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import { ClipboardPasteButton } from "expo-clipboard";
import * as Clipboard from "expo-clipboard";
import { Platform } from "react-native";
import pushEvent from "../helper/pushEvent";

const COPY_BUTTON_BACKGROUND_COLOR = "#F8F8F8";
const COPY_BUTTON_BORDER_RADIUS = calcWidth(2);

export default function QRCodeOptions({ navigation }) {
  const [expandedCategories, setExpandedCategories] = useState(
    Object.keys(QRTypesWithCategory).reduce((acc, category) => {
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

  const renderCategoryItem = ({ item }) => {
    const isExpanded = expandedCategories[item];

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryTitleContainer}
            onPress={() => toggleCategory(item)}
          >
            <Text style={styles.categoryTitle}>{`${item} QR Codes`}</Text>
            <MaterialIcons
              name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {isExpanded && renderSubCategories(item)}
      </View>
    );
  };

  const renderSubCategories = (category) => {
    return (
      <FlatList
        data={Object.keys(QRTypesWithCategory[category])}
        numColumns={3}
        keyExtractor={(subItem) => subItem}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: subItem }) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() =>{
                pushEvent(subItem);
                const navigateTo = QRTypesWithCategory[category][subItem].navigateTo || PAGES.GENERATOR_FORM;
                navigation.navigate(navigateTo, { type: subItem })
              }}
            >
              <View style={styles.iconContainer}>{QRTypes[subItem].icon}</View>
            </TouchableOpacity>
            <Text style={styles.iconTitle}>{subItem}</Text>
          </View>
        )}
      />
    );
  };

  const renderCopyButton = () => {
    if (Platform.OS === "android") {
      return (
        <TouchableOpacity
          onPress={async () => {
            try {
              const text = await getClipBoard();

              if (text) {
                navigation.navigate(PAGES.QR, {
                  type: "Text",
                  data: text,
                  displayData: text,
                });
              } else {
                alert("Clipboard is empty");
              }
            } catch (error) {
              console.error("Error accessing clipboard:", error);
            }
          }}
          style={styles.copyButton}
        >
          <Text style={styles.copyButtonText}>Copy from the Clipboard</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={calcHeight(3)}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      );
    } else if (Clipboard.isPasteButtonAvailable) {
      return (
        <ClipboardPasteButton
          style={styles.copyButtonIOS}
          title="Copy from the Clipboard"
          onPress={async ({ text }) => {
            pushEvent("Clipboard");
            navigation.navigate(PAGES.QR, {
              type: "Text",
              data: text,
              displayData: text,
            });
          }}
        />
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create QR</Text>
      {renderCopyButton()}
      <FlatList
        data={Object.keys(QRTypesWithCategory)}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={renderCategoryItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: getFontSizeByWindowWidth(24),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: calcHeight(2),
  },
  copyButton: {
    backgroundColor: COPY_BUTTON_BACKGROUND_COLOR,
    borderRadius: COPY_BUTTON_BORDER_RADIUS,
    marginTop: calcHeight(2),
    marginHorizontal: calcWidth(2),
    paddingVertical: calcHeight(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: calcWidth(2),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: calcHeight(0.5) },
    shadowOpacity: 0.1,
    shadowRadius: calcWidth(1),
    elevation: calcWidth(1),
  },
  copyButtonText: {
    fontSize: getFontSizeByWindowWidth(15),
    fontWeight: "600",
  },
  copyButtonIOS: {
    height: 40,
    width: calcWidth(90),
    marginHorizontal: calcWidth(2),
    backgroundColor: COPY_BUTTON_BACKGROUND_COLOR,
    foregroundColor: "#000",
    cornerStyle: "rounded",
    displayIfContentAvailable: true,
  },
  arrowIcon: {
    marginLeft: calcWidth(2),
  },
  item: {
    flex: 1,
    padding: calcHeight(2),
    justifyContent: "center",
  },
  icon: {
    backgroundColor: "#fff",
    padding: calcHeight(2),
    borderRadius: calcHeight(18),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: getFontSizeByWindowWidth(12),
    textAlign: "center",
    fontWeight: "bold",
    marginTop: calcHeight(1),
  },
  categoryContainer: {
    marginVertical: calcHeight(2),
  },
  categoryTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: getFontSizeByWindowWidth(18),
    fontWeight: "bold",
    marginLeft: calcWidth(5),
  },
});
