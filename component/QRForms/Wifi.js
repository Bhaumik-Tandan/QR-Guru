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

export default function Wifi() {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const [networkType, setNetworkType] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Feather name="wifi" size={calcWidth(8)} color="black" />
        <TextInput
          style={styles.text}
          placeholder="Network Name (SSID)"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.textContainer}>
        <MaterialIcons name="security" size={calcWidth(8)} color="black" />
        <View style={styles.text}>
          <RNPickerSelect
            items={networkOptions}
            onValueChange={(value) => setNetworkType(value)}
            placeholder={{ label: "Select Security Type", value: "WPA" }}
            style={{
              inputAndroid: styles.text,
              inputIOS: styles.text,
            }}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Entypo name="lock" size={calcWidth(8)} color="black" />
        <TextInput
          style={styles.text}
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
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: calcHeight(2),
    padding: calcHeight(2),
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100%",
    borderRadius: calcHeight(1),
  },
  text: {
    width: "90%",
    marginLeft: calcWidth(5),
    fontSize: getFontSizeByWindowWidth(15),
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
