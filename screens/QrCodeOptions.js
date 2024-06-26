import React, { useEffect, useState,useRef,useCallback } from "react";
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

const PRIMARY_COLOR = "#000";
 
const COPY_BUTTON_BACKGROUND_COLOR = "#F8F8F8";
const COPY_BUTTON_BORDER_RADIUS = calcWidth(2);
import textType from "../helper/textType";


export default function QRCodeOptions({ navigation }) {
  const [isTutorialVisible, setIsTutorialVisible] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);

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
            <View style={{
              padding: calcWidth(4)
            }}>{QRTypes[subItem].icon}</View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                borderBottomColor:
                  index ===
                  Object.keys(QRTypesWithCategory[category]).length - 1
                    ? "white"
                    : "#D3D3D3",
                borderBottomWidth: calcWidth(0.1),
                paddingVertical: calcHeight(1),

              }}
            >
              <Text style={styles.iconTitle}>{subItem}</Text>
              <View style={styles.arrowContainer}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={calcHeight(3)}
                  color="#D3D3D3"
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
            const type= textType(text);
            navigation.navigate(PAGES.QR, {
              type: type,
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


  const handleScroll = useCallback((event) => {
    const { y } = event.nativeEvent.contentOffset;
    
    if (y > calcHeight(4)) {
      setHeadingVisible(true);
    } else {
      setHeadingVisible(false);
    }
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.clipBoardContainer}>{renderCopyButton()}</View>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        height: calcHeight(5),
      }}>
        <Text style={{
          fontSize: getFontSizeByWindowWidth(15),
          fontWeight: "bold",
        
        }}> {headingVisible && 'Create QR'}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}  onScroll={handleScroll}
      scrollEventThrottle={16}
      >
        <Text style={{fontSize: getFontSizeByWindowWidth(25),
    fontWeight: "bold",
    marginLeft: calcWidth(4),
    marginBottom: calcHeight(-2),
    color: PRIMARY_COLOR}}>Create QR</Text>
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
    zIndex:5
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconTitle: {
    flex: 1,
    fontSize: getFontSizeByWindowWidth(15),
    color: PRIMARY_COLOR,
  },
  arrowContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: calcWidth(3),
  },
  arrow: {
    marginLeft: "auto",
  },
  categoryItemContainer: {
    marginBottom: calcHeight(2),
  },
  categoryContainer: {
    margin: calcHeight(2),
    borderRadius: calcWidth(2.5),
    backgroundColor: "white"
  },
  categoryTitle: {
    fontSize: getFontSizeByWindowWidth(17),
    fontWeight: "bold",
    marginLeft: calcWidth(5),
    color: PRIMARY_COLOR,
  },
});
