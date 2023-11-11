import React, { createContext, useContext, useState, useEffect } from "react";
import { getLocalStoreData, setLocalStoreData } from "./helper/localStorage";
const SavedQRContext = createContext();
import { SAVED_QR } from "./constants/localStorageKeys";
export const SavedQRProvider = ({ children }) => {
  const [savedQR, setSavedQR] = useState([]);

  useEffect(() => {
    const getSavedQR = async () => {
      const savedQR = await getLocalStoreData(SAVED_QR);
      setSavedQR(savedQR);
    };
    getSavedQR();
  }, []);


  const saveQr= async (qrData) => {
    const savedQrCodes = await getLocalStoreData(SAVED_QR) || [];
  
    const index = savedQrCodes.findIndex((item) => item.id === qrData.id);
  
    if (index > -1) {
      savedQrCodes[index] = qrData;
    } else {
      savedQrCodes.push(qrData);
    }
  
    await setLocalStoreData(SAVED_QR, savedQrCodes);
    setSavedQR(savedQrCodes);
  
    alert("QR Code Saved");
  }


  const deleteSavedQR = async (id) => {
    const savedQrCodes = savedQR;
    const index = savedQrCodes.findIndex((item) => item.id === id);
    if (index > -1) {
      savedQrCodes.splice(index, 1);
    }
    await setLocalStoreData(SAVED_QR, savedQrCodes);
    setSavedQR(savedQrCodes);
  }

  return (
    <SavedQRContext.Provider
      value={{
        savedQR,
        setSavedQR,
        saveQr,
        deleteSavedQR
      }}
    >
      {children}
    </SavedQRContext.Provider>
  );
};

export const useSavedQR = () => {
  return useContext(SavedQRContext);
};
