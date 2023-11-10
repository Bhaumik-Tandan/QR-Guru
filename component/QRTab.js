import React, { useEffect, useState, useRef } from "react";
import { View, FlatList, StyleSheet, Dimensions,ScrollView } from "react-native";
import CustomizationOptions from "../constants/QRCustomizationOptions";
import QRCodeTabItem from "./QRCodeTabItem";
import QRCodeTabs from "./QRCodeTabs";

function QRTab({ qrData, qrProps, setQRProps }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const windowWidth = Dimensions.get("window").width;

  const handleTabPress = (index) => {
    setSelectedTab(index);
    flatListRef.current.scrollToIndex({ index, animated: true });
  };

  const tabNames = Object.keys(CustomizationOptions);

  const flatListRef = useRef(null);

  return (
    <View style={styles.container}>
      <QRCodeTabs
        tabNames={tabNames}
        selectedTab={selectedTab}
        handleTabPress={handleTabPress}
      />
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={tabNames}
        renderItem={({ item, index }) => (
          <View style={{ width: windowWidth }}>
            <ScrollView contentContainerStyle={styles.qrCodeContainer}>
              {CustomizationOptions[item].map((option, optionIndex) => (
                <QRCodeTabItem
                  key={optionIndex}
                  qrProps={qrProps}
                  option={option}
                  qrData={qrData}
                  setQRProps={setQRProps}
                />
              ))}
            </ScrollView>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / windowWidth
          );
          setSelectedTab(index);
        }}
      />
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
