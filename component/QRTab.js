import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CustomizationOptions from '../constants/QRCustomizationOptions';
import QR from './QR';
import { calcHeight, calcWidth } from '../helper/res';

function QRTab({ qrData, qrProps, setQRProps }) {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
  }, [qrData]);

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
      <ScrollView>
        <View style={styles.qrCodeContainer}>
          {CustomizationOptions[Object.keys(CustomizationOptions)[selectedTab]].map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setQRProps({ ...qrProps, ...option })}
              style={
                styles.qrCodeItem}
            >
              <QR qrCodeContent={qrData} {...qrProps} {...option} size={calcHeight(10)} />
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
    backgroundColor: '#ffff',
  },
  tabButton: {
    padding: calcHeight(1),
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
  qrCodeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
  },
  qrCodeItem: {
    margin: calcHeight(1),
  },
});

export default QRTab;
