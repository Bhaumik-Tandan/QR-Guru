import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
  calcHeight,
  calcWidth,
  getFontSizeByWindowWidth,
} from "../../helper/res";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import PAGES from "../../constants/pages";
import networkOptions from "../../constants/networkOptions";
import GenerateButton from "../GenerateButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import getWifiString from "../../utils/stringGenerator/getWifiString";
import textContainerStyle from "../../constants/textContainerStyle";
import textStyle from "../../constants/textStyle";

export default function Wifi() {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const [networkType, setNetworkType] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={textContainerStyle}>
        <Feather name="wifi" size={calcWidth(8)} color="black" />
        <TextInput
          style={textStyle}
          placeholder="Network Name (SSID)"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={textContainerStyle}>
        <MaterialIcons name="security" size={calcWidth(8)} color="black" />
        <View style={textStyle}>
          <RNPickerSelect
            items={networkOptions}
            onValueChange={(value) => setNetworkType(value)}
            placeholder={{ label: "Select Security Type", value: "WPA" }}
            style={{
              inputAndroid: textStyle,
              inputIOS: textStyle,
            }}
          />
        </View>
      </View>
      <View style={textContainerStyle}>
        <Entypo name="lock" size={calcWidth(8)} color="black" />
        <TextInput
          style={textStyle}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <GenerateButton
        style={styles.generateButton}
        onPress={() =>
          navigation.navigate(PAGES.QR, {
            data: getWifiString(name, networkType, password),
          })
        }
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
