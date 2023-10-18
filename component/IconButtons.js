import React from 'react';
import { View, TouchableOpacity,StyleSheet } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { calcHeight,calcWidth } from '../helper/res';

const IconButtons = ({ selectImage, captureQrCode, clearBackgroundImage, backgroundImage }) => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={selectImage}
      >
        <EvilIcons name="image" size={calcWidth(10)} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={captureQrCode}
      >
        <AntDesign name="sharealt" size={calcWidth(10)} color="black" />
      </TouchableOpacity>
      {backgroundImage && (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={clearBackgroundImage}
        >
          <FontAwesome name="remove" size={calcWidth(10)} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};


export default IconButtons;

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: calcHeight(5), // Add margin above the icons
        width: '100%'
      }
});
