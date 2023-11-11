import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList,TouchableOpacity,Alert } from 'react-native';
import { getLocalStoreData,setLocalStoreData } from '../helper/localStorage';
import PAGES from '../constants/pages';
import { AntDesign } from '@expo/vector-icons'; 
import { calcHeight } from '../helper/res';
import { SAVED_QR } from '../constants/localStorageKeys';
import { useSavedQR } from '../SavedQRContext';

const SavedQrCodes = ({navigation}) => {
  const { savedQR,deleteSavedQR } = useSavedQR();
  const [savedQrCodes, setSavedQrCodes] = useState([]);

  useEffect(() => {
    setSavedQrCodes(savedQR);
  }
  , [savedQR]);

  const deleteConfirm = (id) => {
    setSavedQrCodes((prev)=>{
      return prev.filter((item)=>item.id!==id)
    });
    deleteSavedQR(id);
  }



  const deleteItem = async (id) => {
    // ask are you sure
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => deleteConfirm(id),
        // make it red
        style: "destructive"
       }
      ],
      { cancelable: false }
    );

  }

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
    ><View>
      <Text style={styles.qrCodeText}>{item.displayData}</Text>
      <Text>{item.type}</Text>
      </View>
      <TouchableOpacity
      onPress={()=>{deleteItem(item.id)}}>
        <AntDesign name="delete" size={calcHeight(5)} color="red" />

        
      </TouchableOpacity>


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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qrCodeText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SavedQrCodes;
