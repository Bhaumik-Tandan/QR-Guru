import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, ScrollView, Button } from "react-native";
import GenerateButton from "./GenerateButton";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../constants/pages";
import RNPickerSelect from "react-native-picker-select";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import { FAB } from 'react-native-paper';

export default function GenericQRForm({ fields, generateQRContent }) {
  const [qrInfo, setQrInfo] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const obj = {};
    fields.forEach((field) => {
      obj[field.name] = field.initialValue || "";
    });
    setQrInfo(obj);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {fields.map((field) => (
          <View key={field.name}>
            <View style={styles.textContainerStyle}>
              <View>{field.icon}</View>
              {field.type === "picker" ? (
                <RNPickerSelect
                  items={field.options}
                  onValueChange={(text) =>
                    setQrInfo((prev) => ({ ...prev, [field.name]: text }))
                  }
                  placeholder={field.placeholder}
                  style={{
                    inputAndroid: styles.textStyle,
                    inputIOS: styles.textStyle,
                  }}
                />
              ) : (
                <TextInput
                  style={styles.textStyle}
                  placeholder={field.placeholder}
                  onChangeText={(text) =>
                    setQrInfo((prev) => ({ ...prev, [field.name]: text }))
                  }
                  value={qrInfo[field.name]}
                  multiline={field.multiline}
                />
              )}
            </View>
            {field.buttons && (
              <View style={styles.buttonContainer}>
                {field.buttons.map((button) => (
                  <View style={styles.button} key={button.title}>
                    <Button
                      title={button.title}
                      onPress={() =>
                        setQrInfo((prev) => ({
                          ...prev,
                          [field.name]: prev[field.name] + button.value,
                        }))
                      }
                    />
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
      <GenerateButton
        onPress={() =>
          navigation.navigate(PAGES.QR, { data: generateQRContent(qrInfo) })
        }
      />
      </View>
      <View style={styles.fabContainer}>
        <FAB style={styles.fab} icon="plus" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  textContainerStyle: {
    flexDirection: "row",
    marginVertical: calcHeight(2),
    padding: calcHeight(2),
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "90%",
    borderRadius: calcHeight(1),
  },
  textStyle: {
    width: "90%",
    marginLeft: calcWidth(5),
    fontSize: getFontSizeByWindowWidth(15),
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: calcHeight(5),
  },
  button: {
    marginHorizontal: calcWidth(5),
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: calcHeight(1),
  },
  fabContainer: {
    position: 'absolute',
    bottom: calcHeight(5), // 5% of the device height
    right: calcWidth(5), // 5% of the device width
  },
  fab: {
    backgroundColor: 'white',
  },
});
