import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { calcHeight, calcWidth } from "../helper/res";
import QRTypes from "../constants/QRTypes";
import PAGES from "../constants/pages";

export default function QRCodeOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={QRTypes}
        numColumns={3}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={()=>navigation.navigate(PAGES.GENERATOR_FORM,{type:item.title})}
          >
            {item.icon}
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Center content vertically,
  },
  item: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: calcHeight(2),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: calcHeight(27),
    width: calcWidth(27),
    height: calcWidth(27),
    marginHorizontal: calcHeight(1),
    marginVertical: calcHeight(2),
  },
});
