import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import defaultQRProps from "../constants/defaultQRProps";
import QRTab from "../component/QRTab";
import QR from "../component/QR";
import { AntDesign,Entypo,MaterialIcons  } from '@expo/vector-icons'; 
import { calcHeight } from "../helper/res";
import { useNavigation } from "@react-navigation/native";
import PAGES from "../constants/pages";

export default function QREdit({
  route: {
    params: { data, propOverRide, type, displayData },
  },
}) {
  const [qrCodeContent, setQRCodeContent] = useState("");
  const [qrProps, setQRProps] = useState(defaultQRProps);
  const [syncOn,setSyncOn] = useState(false);

    useEffect(() => {  
        if(propOverRide)
    setQRProps(propOverRide);
    }
    ,[propOverRide]);
  const navigation = useNavigation();
  useEffect(() => {
    setQRCodeContent(data);
  }, [data]);

  return (
    <View style={styles.container}>

      <QRTab qrData={qrCodeContent}
       setQRProps={setQRProps}
       qrProps={qrProps}
       sync={syncOn}
        />
         <TouchableOpacity
        style={styles.syncButton}
        onPress={() => {
            setSyncOn((prev)=>!prev);
        }}
      >
        <MaterialIcons name={syncOn?"sync-disabled":"sync"} size={calcHeight(5)} color="red" />
        <Text>{syncOn?"Cancel":"Sync All"}</Text>
      </TouchableOpacity>

      <View style={styles.QR}>
        <QR qrCodeContent={qrCodeContent} {...qrProps} />
        <Text 
        style={{
            fontSize:calcHeight(2),
            fontWeight:"bold",
            marginBottom:calcHeight(1),
        }}
        >Preview</Text>
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
      
      }}>
        
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
            navigation.goBack();
        }}
      >
        <Entypo name="circle-with-cross" size={calcHeight(7)} color="red" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
            navigation.navigate(PAGES.QR,{
              data:qrCodeContent,
              propOverRide:qrProps,
              type:type,
              displayData:displayData,
            })
        }}
      >
        <AntDesign name="checkcircle" size={calcHeight(6)} color="blue" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      QR: {
        justifyContent: "center",
        alignItems: "center",
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
});
