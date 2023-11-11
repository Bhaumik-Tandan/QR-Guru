import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { getLocalStoreData } from '../helper/localStorage';
import { calcHeight } from '../helper/res';
import PAGES from '../constants/pages';

const SavedQrCodes = ({navigation}) => {
  const [savedQrCodes, setSavedQrCodes] = useState([]);

  useEffect(() => {
    const getSavedQrCodes = async () => {
      const data = await getLocalStoreData("SAVED_QR");
      setSavedQrCodes(data);
    };

    getSavedQrCodes();
    return () => {};
  }, []);

  const renderQrCodeItem = ({ item }) => (
    <TouchableOpacity style={styles.qrCodeItem}
    onPress={()=>{
        navigation.navigate(PAGES.QR,{
            data:item.data,
            propOverRide:item.props,
            displayData:item.displayData,
            type:item.type,
            id:item.id
        })
    }
    }
    >
      <Text style={styles.qrCodeText}>{item.displayData}</Text>
      <Text>{item.type}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved QR Codes</Text>
      <FlatList
        data={savedQrCodes}
        renderItem={renderQrCodeItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  qrCodeItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  qrCodeText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SavedQrCodes;
