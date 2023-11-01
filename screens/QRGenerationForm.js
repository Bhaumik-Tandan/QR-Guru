import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { calcHeight } from "../helper/res";
import BannerAd from "../component/BannerAd";
import QRTypes from "../constants/QRTypes";
import GenericQRForm from "../component/GenericQRForm";
import { calcWidth } from "../helper/res";

function QRGenerationForm({
  navigation,
  route: {
    params: { type },
  },
}) {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={calcHeight(3)} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{type}</Text>
        <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate(QRTypes[type]?.topIcon?.navigateTo,{})}>
          {QRTypes[type]?.topIcon?.icon}
          <Text style={styles.iconLabel}>{QRTypes[type]?.topIcon?.label}</Text>
      </TouchableOpacity>
      </View>
      <GenericQRForm {...QRTypes[type].componentProps} />
      <BannerAd />
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
  iconLabel:{
    fontSize:calcWidth(2),
    textAlign:"center"
  },
  icon:{
    alignItems:"center"
  }
});
