import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function QRCodeTabs({ tabNames, selectedTab, handleTabPress, qrProps, qrData, setQRProps }) {
  return (
    <View style={styles.tabs}>
      {tabNames.map((tabName, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabButton,
            selectedTab === index && styles.activeTab,
          ]}
          onPress={() => handleTabPress(index)}
        >
          <Text style={selectedTab === index ? styles.activeText : styles.text}>
            {tabName}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffff',
  },
  tabButton: {
    padding: calcHeight(1),
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: 'blue',
  },
  text: {
    color: 'black',
  },
  activeText: {
    color: 'blue',
  },
});

export default QRCodeTabs;
