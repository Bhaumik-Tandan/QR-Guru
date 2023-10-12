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
    const { qrCodeContent } = this.props;
    const { showQrCode } = this.state;

    return qrCodeContent && showQrCode && (
      <QRCode
        content={qrCodeContent}
        codeStyle='circle'
        outerEyeStyle='circle'
        innerEyeStyle='circle'
        size={250}
        color='black'
        backgroundColor='blue'
        padding={10}
        linearGradient={['rgb(255,0,0)', 'rgb(0,255,255)']}
      />
    );
  }
}

export default QR;
