import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../helper/res';

function DialerNumber({ text, subtext }) {
  return (
    <View style={styles.container}>
      <Text style={{...styles.text,marginBottom:subtext?-calcHeight(1):0}}>{text}</Text>
      {subtext && <Text style={styles.subtext}>{subtext}</Text>}
    </View>
  );
}

const DIALER_SIZE = 18;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e4e4',
    width: calcWidth(DIALER_SIZE),
    height: calcWidth(DIALER_SIZE),
    borderRadius: calcWidth(DIALER_SIZE / 2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcWidth(2),
  },
  text: {
    fontSize: getFontSizeByWindowWidth(30),
  },
  subtext: {
    fontSize: getFontSizeByWindowWidth(8),
  },
});

export default DialerNumber;
