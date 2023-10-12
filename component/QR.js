import React, { Component } from 'react';
import { QRCode } from 'react-native-custom-qr-codes-expo';

class QR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQrCode: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.qrCodeContent !== prevProps.qrCodeContent) {
      this.setState({ showQrCode: false }, () => {
        this.setState({ showQrCode: true });
      });
    }
  }

  render() {
    const { qrCodeContent,backgroundImage } = this.props;
    const { showQrCode } = this.state;

    return qrCodeContent && showQrCode && (
      <QRCode
        content={qrCodeContent}
        backgroundImage={backgroundImage}
      />
    );
  }
}

export default QR;
