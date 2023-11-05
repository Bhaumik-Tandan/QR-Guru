import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CustomizationOptions from '../constants/QRCustomizationOptions';
import QR from './QR';
import { calcHeight } from '../helper/res';

function QRTab({ qrData, qrProps, setQRProps }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {Object.keys(CustomizationOptions).map((tabName, index) => (
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
      <ScrollView style={styles.qrCodes}>
        <View style={styles.qrCodeContainer}>
          {CustomizationOptions[Object.keys(CustomizationOptions)[selectedTab]].map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setQRProps({ ...qrProps, ...option })}
              style={[
                styles.qrCodeItem,
                selectedTab === index && styles.selectedQR, // Apply selected style conditionally
              ]}
            >
              <QR qrCodeContent={qrData} {...option} size={calcHeight(10)} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  tabButton: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: 'blue', // Change the color as per your design
  },
  text: {
    color: 'black',
  },
  activeText: {
    color: 'blue', // Change the color as per your design
  },
  qrCodes: {
    flex: 1,
    padding: 10,
  },
  qrCodeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Change to 'flex-start' to make items align to the left
  },
  qrCodeItem: {
    flexBasis: '50%', // Adjust based on the number of items per row (e.g., 2 items per row)
    padding: 10,
  },
  selectedQR: {
    borderColor: 'green', // Green border for selected item
    borderWidth: 2,
    padding: 8, // Adjust padding as needed
  },
});

export default QRTab;
