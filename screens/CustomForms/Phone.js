import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import DialerNumber from "../../component/DialerNumber";
import DialerNumbers from "../../constants/DialerNumbers";
import {
  calcHeight,
  calcWidth,
  getFontSizeByWindowWidth,
} from "../../helper/res";
import PhoneProps from "../../constants/QRTypes/PhoneProps";
const DIALER_SIZE = 18;
import PAGES from "../../constants/pages";

export default function Phone({ navigation }) {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text>

      <FlatList
        data={DialerNumbers}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setPhoneNumber((prev) => prev + item.text)}
            onLongPress={() =>
              item.text === "0" ? setPhoneNumber((prev) => prev + "+") : null
            }
          >
            <DialerNumber text={item.text} subtext={item.subtext} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.text}
        numColumns={3}
        columnWrapperStyle={styles.numbersWrapper}
        style={styles.numbers}
      />

      <View style={styles.options}>
        <TouchableOpacity style={styles.backSpace}></TouchableOpacity>
        <TouchableOpacity
          style={styles.dialerButton}
          onPress={() => {
            const { generateQRContent } = PhoneProps.componentProps;
            navigation.navigate(PAGES.QR, {
              data: generateQRContent({ phone: phoneNumber }),
              displayData: phoneNumber,
              type: "Phone",
            });
          }}
        >
          {/* <FontAwesome name="phone" size={calcWidth(10)} color="white" /> */}
          <AntDesign name="qrcode" size={calcWidth(10)} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPhoneNumber((prev) => prev.slice(0, -1))}
          style={styles.backSpace}
        >
          {phoneNumber && (
            <FontAwesome5 name="backspace" size={calcHeight(3)} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  phoneNumber: {
    fontSize: getFontSizeByWindowWidth(30),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: calcWidth(10),
  },
  dialerButton: {
    backgroundColor: "blue",
    width: calcWidth(DIALER_SIZE),
    height: calcWidth(DIALER_SIZE),
    borderRadius: calcWidth(DIALER_SIZE / 2),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: calcWidth(2),
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: calcWidth(10),
    marginVertical: calcWidth(2),
  },
  numbersWrapper: {
    justifyContent: "space-evenly",
  },
  backSpace: {
    width: calcWidth(DIALER_SIZE),
    height: calcWidth(DIALER_SIZE),
    borderRadius: calcWidth(DIALER_SIZE / 2),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: calcWidth(2),
  },
});
