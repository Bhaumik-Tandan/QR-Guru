import React from "react";
import { View, StyleSheet } from "react-native";
import { calcHeight } from "../../helper/res";
import { Platform } from "react-native";

function BannerAdComponent() {
  const adUnitId =
    Platform.OS === "android"
      ? "ca-app-pub-5499479031752321/9214153841"
      : "ca-app-pub-5499479031752321/7901243614";
  const {
    BannerAd,
    BannerAdSize,
    TestIds,
  } = require("react-native-google-mobile-ads");

  return (
    <View style={styles.adBannerContainer}>
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={adUnitId}
        testDevices={[TestIds.SIMULATOR]}
        onAdLoaded={() => {
          // Ad has loaded successfully
        }}
        onAdFailedToLoad={(error) => {
          console.error("Ad failed to load: ", error);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  adBannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Adjust the width as needed
    height: calcHeight(10), // Adjust the height as needed
  },
});

export default BannerAdComponent;
