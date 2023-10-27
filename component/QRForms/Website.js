import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  calcHeight,
  calcWidth,
  getFontSizeByWindowWidth,
} from "../../helper/res";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../../constants/pages";
import GenerateButton from "../GenerateButton";
import textStyle from "../../constants/textStyle";
import textContainerStyle from "../../constants/textContainerStyle";

export default function Website() {
  const [value, onChangeText] = useState("https://");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={textContainerStyle}>
        <Entypo name="link" size={calcWidth(8)} color="black" />
        <TextInput
          style={textStyle}
          placeholder="Enter Website URL"
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="www."
            onPress={() => onChangeText((text) => text + "www.")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title=".com"
            onPress={() => onChangeText((text) => text + ".com")}
          />
        </View>
      </View>
      <GenerateButton
        onPress={() => navigation.navigate(PAGES.QR, { data: value })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: calcHeight(5),
  },
  button: {
    marginHorizontal: calcWidth(5),
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: calcHeight(1),
  },
});