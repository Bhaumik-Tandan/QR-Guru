import React from 'react';
import QR from '../component/QR';
import ViewShot from 'react-native-view-shot';

const QRDisplay = ({ qrCodeContent, logo, qrCodeView }) => {

  return (
    <ViewShot options={{ format: 'jpg', quality: 0.9 }} ref={qrCodeView} style={{ backgroundColor: '#fff' }}>
      {logo ? (
        <QR qrCodeContent={qrCodeContent} logo={{ uri: logo }} />
      ) : (
        <QR qrCodeContent={qrCodeContent} />
      )}
    </ViewShot>
  );
};


export default QRDisplay;
