import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { calcHeight } from "../helper/res";
import Website from "../component/QRForms/Website";

function QRGenerationForm({ navigation, route: { params: { type,component } } }) {

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={calcHeight(3)} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{type}</Text>
        <View></View>
      </View>
      {component}
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
});
