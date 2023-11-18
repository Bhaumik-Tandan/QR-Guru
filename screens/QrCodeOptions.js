import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { ClipboardPasteButton } from "expo-clipboard";
import * as Clipboard from "expo-clipboard";

import PAGES from "../constants/pages";
import QRTypes, { QRTypesWithCategory } from "../constants/QRTypes";
import getClipBoard from "../helper/getClipBoard";
import {
  calcHeight,
  calcWidth,
  getFontSizeByWindowWidth,
} from "../helper/res";
import pushEvent from "../helper/pushEvent";
import {
  getLocalStoreData,
  setLocalStoreData,
} from "../helper/localStorage";
import { TUTORIAL } from "../constants/localStorageKeys";
import TutorialModal from "../component/Tutorial/TutorialModal";

const PRIMARY_COLOR = "#3498db";
 
const COPY_BUTTON_BACKGROUND_COLOR = "#F8F8F8";
const COPY_BUTTON_BORDER_RADIUS = calcWidth(2);

const isURL = (text) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(text);
};

export default function QRCodeOptions({ navigation }) {
  const [isTutorialVisible, setIsTutorialVisible] = useState(false);

  const onCloseTutorial = () => {
    setIsTutorialVisible(false);
  };

  useEffect(() => {
    getLocalStoreData(TUTORIAL).then((tutorial) => {
      if (!tutorial) {
        setIsTutorialVisible(true);
        setLocalStoreData(TUTORIAL, true);
      }
    });
  }, []);

  const renderCategoryItem = ({ item }) => {
    return (
      <View style={styles.categoryItemContainer}>
        <Text style={styles.categoryTitle}>{item}</Text>
        <View style={styles.categoryContainer}>
          {renderSubCategories(item)}
        </View>
      </View>
    );
  };

  const renderSubCategories = (category) => {
    return (
      <FlatList
        data={Object.keys(QRTypesWithCategory[category])}
        keyExtractor={(subItem) => subItem}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: subItem, index }) => (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              pushEvent(subItem);
              const navigateTo =
                QRTypesWithCategory[category][subItem].navigateTo ||
                PAGES.GENERATOR_FORM;
              navigation.navigate(navigateTo, { type: subItem });
            }}
          >
            <View>{QRTypes[subItem].icon}</View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                borderBottomColor:
                  index ===
                  Object.keys(QRTypesWithCategory[category]).length - 1
                    ? "white"
                    : "grey",
                borderBottomWidth: calcWidth(0.1),
              }}
            >
              <Text style={styles.iconTitle}>{subItem}</Text>
              <View style={styles.arrowContainer}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={calcHeight(3)}
                  color="grey"
                  style={styles.arrow}
                />
              </View>
            </View>
          </TouchableOpacity>
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
          <FontAwesome name="paste" size={24} color="black" />
        </TouchableOpacity>
      );
    } else if (Clipboard.isPasteButtonAvailable) {
      return (
        <ClipboardPasteButton
          style={styles.copyButtonIOS}
          onPress={async ({ text }) => {
            if (text.length > 1273) {
              alert("Text too large");
              return;
            }

            pushEvent("Clipboard");
            const url = isURL(text);
            navigation.navigate(PAGES.QR, {
              type: url ? "Website" : "Text",
              data: text,
              displayData: text,
            });
          }}
          displayMode="iconOnly"
        />
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.clipBoardContainer}>{renderCopyButton()}</View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Create QR</Text>
        <FlatList
          data={Object.keys(QRTypesWithCategory)}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          renderItem={renderCategoryItem}
        />
      </ScrollView>
      <TutorialModal isVisible={isTutorialVisible} onClose={onCloseTutorial} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  heading: {
    fontSize: getFontSizeByWindowWidth(24),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: calcHeight(2),
    color: PRIMARY_COLOR,
  },
  copyButton: {
    backgroundColor: COPY_BUTTON_BACKGROUND_COLOR,
    borderRadius: COPY_BUTTON_BORDER_RADIUS,
    marginHorizontal: calcWidth(2),
    paddingVertical: calcHeight(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: calcWidth(2),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: calcWidth(1),
    elevation: calcWidth(1),
  },
  copyButtonIOS: {
    height: calcHeight(8),
    width: calcWidth(15),
    marginHorizontal: calcWidth(2),
    alignSelf: "center",
    backgroundColor: PRIMARY_COLOR,
    foregroundColor: "#000",
  },
  clipBoardContainer: {
    position: "absolute",
    bottom: calcHeight(5),
    right: calcWidth(3),
    zIndex:30
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    padding: calcWidth(2),
  },
  iconTitle: {
    flex: 1,
    fontSize: getFontSizeByWindowWidth(15),
    textAlign: "left",
    marginLeft: calcWidth(5),
    color: PRIMARY_COLOR,
  },
  arrowContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  arrow: {
    marginLeft: "auto",
  },
  categoryItemContainer: {
    marginBottom: calcHeight(10),
  },
  categoryContainer: {
    margin: calcHeight(2),
    borderRadius: calcWidth(2.5),
    backgroundColor: "white",
  },
  categoryTitle: {
    fontSize: getFontSizeByWindowWidth(20),
    fontWeight: "bold",
    marginLeft: calcWidth(3),
    color: PRIMARY_COLOR,
  },
});
