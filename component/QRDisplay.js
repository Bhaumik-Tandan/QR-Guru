import React from 'react';
import QR from '../component/QR';
import ViewShot from 'react-native-view-shot';

const QRDisplay = ({ qrCodeContent, backgroundImage, qrCodeView }) => {

  return (
    <ViewShot options={{ format: 'jpg', quality: 0.9 }} ref={qrCodeView} style={{ backgroundColor: '#fff' }}>
      {backgroundImage ? (
        <QR qrCodeContent={qrCodeContent} backgroundImage={{ uri: backgroundImage }} />
      ) : (
        <QR qrCodeContent={qrCodeContent} />
      )}
    </ViewShot>
  );
};


export default QRDisplay;
