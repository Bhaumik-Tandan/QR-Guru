import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView
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

export default function TextBox() {
  const [value, onChangeText] = useState("");
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={textContainerStyle}>
        <TextInput
          style={textStyle}
          placeholder="Please Enter Something"
          onChangeText={(text) => onChangeText(text)}
          value={value}
          multiline={true}
        />
      </View>
      <GenerateButton
        onPress={() => navigation.navigate(PAGES.QR, { data: value })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});
