import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import QR from './QR';

function QRCodeTabItem({ qrProps, option, qrData, setQRProps }) {
  return (
    <TouchableOpacity
      onPress={() => setQRProps({ ...qrProps, ...option })}
      style={styles.qrCodeItem}
    >
      <QR qrCodeContent={qrData} {...qrProps} {...option} size={calcHeight(10)} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  qrCodeItem: {
    margin: calcHeight(1),
  },
});

export default QRCodeTabItem;
