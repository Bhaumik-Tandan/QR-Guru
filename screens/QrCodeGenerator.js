import React from 'react';
import { View,Text, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import { calcHeight, calcWidth } from '../helper/res';
import QRTypes from '../constants/QRTypes';

export default function QRCodeGenerator() {

  return (
    <FlatList contentContainerStyle={styles.container}
    data={QRTypes}
    numColumns={3}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item}  onPress={()=>console.log(item.title)}>
          {item.icon}
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}

    >

    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: calcHeight(5),
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  },
  item: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: calcHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: calcHeight(27),
    width: calcWidth(27),
    height: calcWidth(27),
    margin: calcHeight(1),
  }
});
