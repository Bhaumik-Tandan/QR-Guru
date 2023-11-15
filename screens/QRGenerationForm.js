import React, { useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { calcHeight } from "../helper/res";
import QRTypes from "../constants/QRTypes";
import GenericQRForm from "../component/GenericQRForm";
import { calcWidth } from "../helper/res";

function QRGenerationForm({
  navigation,
  route: {
    params: { type },
  },
}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: type,
    });
  }, [navigation, type]);

  return (
    <View style={styles.container}>
      <GenericQRForm {...QRTypes[type].componentProps} type={type} />
    </View>
  );
}

export default QRGenerationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNav: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center", // Center align horizontally// Vertically centers its children
    justifyContent: "space-between",
    height: calcHeight(7),
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconLabel: {
    fontSize: calcHeight(1),
    textAlign: "center",
  },
  icon: {
    alignItems: "center",
  },
});
