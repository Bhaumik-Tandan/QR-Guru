import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { calcHeight } from '../helper/res';
import QR from './QR';


function areValuesEqual(obj1, obj2) {
  for (const key in obj2) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }

  return true;
}
function QRCodeTabItem({ qrProps, option, qrData, setQRProps }) {

  return (
    <TouchableOpacity
      onPress={() => setQRProps({ ...qrProps, ...option })}
      style={{...styles.qrCodeItem,
      borderColor: areValuesEqual(qrProps,option)? "green":"transparent",
      borderWidth:calcHeight(0.2)
      }}
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
