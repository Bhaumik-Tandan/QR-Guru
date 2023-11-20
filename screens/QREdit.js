import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text,TextInput } from "react-native";
import defaultQRProps from "../constants/defaultQRProps";
import QRTab from "../component/QRTab";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { calcHeight } from "../helper/res";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../constants/pages";

export default function QREdit({
  route: {
    params: { data, propOverRide, type, displayData, id },
  },
}) {
  const [qrCodeContent, setQRCodeContent] = useState("");
  const [qrProps, setQRProps] = useState(defaultQRProps);


  useEffect(() => {
    if (propOverRide) setQRProps(propOverRide);
  }, [propOverRide]);
  const navigation = useNavigation();
  useEffect(() => {
    setQRCodeContent(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <QRTab
        qrData={qrCodeContent}
        setQRProps={setQRProps}
        qrProps={qrProps}
        sync={false}
      />
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Entypo name="circle-with-cross" size={calcHeight(7)} color="red" />
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if(qrProps.size <= 30) 
              setQRProps((prev) => ({ ...prev, size: 30 }));

            navigation.navigate(PAGES.QR, {
              data: qrCodeContent,
              propOverRide: qrProps,
              type: type,
              displayData: displayData,
              id,
            });
          }}
        >
          <AntDesign name="checkcircle" size={calcHeight(6)} color="blue" />
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  syncButton: {
    alignItems: "center",
    justifyContent: "center",
    margin: calcHeight(2),
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  sizeInput: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  sizeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
});
