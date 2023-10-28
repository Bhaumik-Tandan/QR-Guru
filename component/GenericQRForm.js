import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Button
} from "react-native";
import GenerateButton from "./GenerateButton";
import textStyle from "../constants/textStyle";
import textContainerStyle from "../constants/textContainerStyle";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../constants/pages";
import RNPickerSelect from "react-native-picker-select";
import { calcHeight, calcWidth } from "../helper/res";

export default function GenericQRForm({fields, generateQRContent}) {
  const [qrInfo, setQrInfo] = useState({});
  const navigation = useNavigation();
  

  useEffect(() => {
    const obj = {};
    fields.forEach((field) => {
      obj[field.name] = field.initialValue || "";
    });
    setQrInfo(obj);
  }
  , []);



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map((field) => (<View>
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
      </View>
      {field.buttons&&(<View style={styles.buttonContainer}>
        {field.buttons.map((button)=>(
          <View style={styles.button}>
          <Button
            title={button.title}
            onPress={() => setQrInfo((prev) => ({ ...prev, [field.name]: prev[field.name]+button.value }))}
          />
        </View>
        ))}
      </View>)}
      </View> )
      )}
      <GenerateButton onPress={()=>navigation.navigate(PAGES.QR,{data:generateQRContent(qrInfo)})} />
    </ScrollView>
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
  }
});
