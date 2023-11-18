import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text,TextInput } from "react-native";
import defaultQRProps from "../constants/defaultQRProps";
import QRTab from "../component/QRTab";
import QR from "../component/QR";
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
  const [syncOn, setSyncOn] = useState(false);

  const incrementValue = () => {
    setQRProps((prev) => ({ ...prev, size: prev.size + 1 }));
  };

  const decrementValue = () => {
    if (qrProps.size > 30) {
      setQRProps((prev) => ({ ...prev, size: prev.size - 1 }));
    }
  };
  
  const handleBlur = () => {
    // Ensure the minimum value is 30 when the user removes focus
    if (qrProps.size < 30) {
      setQRProps((prev) => ({ ...prev, size: 30 }));
    }
  };

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
        sync={syncOn}
      />
      {/* <View style={styles.sizeContainer}>
      <TouchableOpacity onPress={decrementValue} style={styles.sizeButton}>
        <Text>-</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.sizeInput}
        keyboardType="numeric"
        value={qrProps.size} // Ensure the value is a string
        onChangeText={(size) => setQRProps((prev) => ({ ...prev, size: parseInt(size) }))}
        onBlur={handleBlur}
      />
      <TouchableOpacity onPress={incrementValue} style={styles.sizeButton}>
        <Text>+</Text>
      </TouchableOpacity>
    </View> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.syncButton}
          onPress={() => {
            setSyncOn((prev) => !prev);
          }}
        >
          <MaterialIcons
            name={syncOn ? "sync-disabled" : "sync"}
            size={calcHeight(5)}
            color="red"
          />
          <Text>{syncOn ? "Sync Off" : "Sync On"}</Text>
        </TouchableOpacity>

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
