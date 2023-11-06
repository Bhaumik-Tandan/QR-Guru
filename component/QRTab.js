import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CustomizationOptions from '../constants/QRCustomizationOptions';
import QRCodeTabItem from './QRCodeTabItem';
import QRCodeTabs from './QRCodeTabs';

function QRTab({ qrData, qrProps, setQRProps }) {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    // Your useEffect logic here
  }, [qrData]);

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  const tabNames = Object.keys(CustomizationOptions);

  return (
    <View style={styles.container}>
      <QRCodeTabs
        tabNames={tabNames}
        selectedTab={selectedTab}
        handleTabPress={handleTabPress}
      />
      <ScrollView>
        <View style={styles.qrCodeContainer}>
          {CustomizationOptions[tabNames[selectedTab]].map((option, index) => (
            <QRCodeTabItem
              key={index}
              qrProps={qrProps}
              option={option}
              qrData={qrData}
              setQRProps={setQRProps}
            />
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
  qrCodeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default QRTab;
