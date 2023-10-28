import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import GenerateButton from "./GenerateButton";
import textStyle from "../constants/textStyle";
import textContainerStyle from "../constants/textContainerStyle";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../constants/pages";
import RNPickerSelect from "react-native-picker-select";

export default function GenericQRForm({fields, generateQRContent}) {
  const [qrInfo, setQrInfo] = useState({});
  const navigation = useNavigation();
  

  useEffect(() => {
    const obj = {};
    fields.forEach((field) => {
      obj[field.name] = "";
    });
    setQrInfo(obj);
  }
  , []);



  return (
    <View style={styles.container}>
      {fields.map((field) => (
      <View style={textContainerStyle} key={field.name}>
       <View>{field.icon}</View>{
        field.type==="picker"?
        <RNPickerSelect
            items={field.options}
            onValueChange={(text) => setQrInfo((prev) => ({ ...prev, [field.name]: text }))}
            placeholder={field.placeholder}
            style={{
              inputAndroid: textStyle,
              inputIOS: textStyle,
            }}
          />:
        <TextInput
          style={textStyle}
          placeholder={field.placeholder}
          onChangeText={(text) => setQrInfo((prev) => ({ ...prev, [field.name]: text }))}
          value={qrInfo[field.name]}
          multiline={field.multiline}
        />}
      </View> )
      )}
      <GenerateButton onPress={()=>navigation.navigate(PAGES.QR,{data:generateQRContent(qrInfo)})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});
