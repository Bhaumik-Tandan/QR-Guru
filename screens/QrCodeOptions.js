import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PAGES from "../constants/pages";
import QRTypes, { QRTypesWithCategory } from "../constants/QRTypes";
import getClipBoard from "../helper/getClipBoard";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import { ClipboardPasteButton } from "expo-clipboard";
import * as Clipboard from "expo-clipboard";
import { Platform } from "react-native";
import pushEvent from "../helper/pushEvent";
import TutorialModal from "../component/Tutorial/TutorialModal";
import { getLocalStoreData, setLocalStoreData } from "../helper/localStorage";
import { TUTORIAL } from "../constants/localStorageKeys";
import { FontAwesome } from "@expo/vector-icons";
const COPY_BUTTON_BACKGROUND_COLOR = "#F8F8F8";
const COPY_BUTTON_BORDER_RADIUS = calcWidth(2);
import { MaterialIcons } from '@expo/vector-icons'; 

const isURL = (text) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(text);
};

export default function QRCodeOptions({ navigation }) {

  const [isTutorialVisible, setIsTutorialVisible] = useState(false);
  onCloseTutorial = () => {
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
      <View style={styles.categoryContainer}>
        {renderSubCategories(item)}
      </View>
    );
  };

  const renderSubCategories = (category) => {
    return (
      <FlatList
        data={Object.keys(QRTypesWithCategory[category])}
        keyExtractor={(subItem) => subItem}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: subItem }) => (
          <TouchableOpacity style={styles.icon}>
            {QRTypes[subItem].icon}
            <Text style={styles.iconTitle}>{subItem}</Text>
            <View style={styles.arrowContainer}>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={styles.arrow} />
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
            if(text.length>1273)
            {
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
  clipBoardContainer: {
    position: "absolute",
    zIndex: 5,
    bottom: calcHeight(5),
    right: calcWidth(3),
  },
  copyButtonIOS: {
    height: calcHeight(8),
    width: calcWidth(15),
    marginHorizontal: calcWidth(2),
    alignSelf: "center",
    backgroundColor: "blue",
    foregroundColor: "#000",
  },
  icon: {
    padding: calcHeight(2),
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2,
  flexDirection: "row",
  borderBottomColor: "grey",
  borderBottomWidth: calcWidth(0.1),
  alignItems: "center", // Center the content horizontally
  },
  iconTitle: {
    flex: 1,
  fontSize: getFontSizeByWindowWidth(12),
  textAlign: "left", // Align the text to the left
  marginLeft: calcWidth(5), // Add left margin for spacing,
  },
  arrowContainer: {
    flex: 1,
    alignItems: "flex-end", // Align the arrow to the right
  },
  
  // Update the styles for the arrow
  arrow: {
    marginLeft: "auto", // Use marginLeft: "auto" to push it to the right
  },
  categoryContainer: {
    margin: calcHeight(2),
    borderRadius:calcWidth(2.5),
    backgroundColor:"white"
  },
});
