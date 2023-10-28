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

  useEffect(() => {
    console.log("qrInfo",generateQRContent(qrInfo));
  }
  , [qrInfo]);


  return (
    <View style={styles.container}>
      {fields.map((field) => (
      <View style={textContainerStyle} key={field.name}>
       {field.icon}
        <TextInput
          style={textStyle}
          placeholder={field.placeholder}
          onChangeText={(text) => setQrInfo((prev) => ({ ...prev, [field.name]: text }))}
          value={qrInfo[field.name]}
          multiline={field.multiline}
        />
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
