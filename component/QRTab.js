import React, { useEffect, useState, useRef } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import CustomizationOptions from "../constants/QRCustomizationOptions";
import QRCodeTabItem from "./QRCodeTabItem";
import QRCodeTabs from "./QRCodeTabs";

function QRTab({ qrData, qrProps, setQRProps }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const scrollViewRef = useRef(null);
  const windowWidth = Dimensions.get("window").width;

  const handleTabPress = (index) => {
    setSelectedTab(index);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: index * windowWidth, animated: true });
    }
  };

  const tabNames = Object.keys(CustomizationOptions);

  return (
    <View style={styles.container}>
      <QRCodeTabs
        tabNames={tabNames}
        selectedTab={selectedTab}
        handleTabPress={handleTabPress}
      />
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {tabNames.map((tabName, index) => (
          <View key={index} style={{ width: windowWidth }}>
            <View style={styles.qrCodeContainer}>
              {CustomizationOptions[tabName].map((option, optionIndex) => (
                <QRCodeTabItem
                  key={optionIndex}
                  qrProps={qrProps}
                  option={option}
                  qrData={qrData}
                  setQRProps={setQRProps}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  qrCodeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export default QRTab;
