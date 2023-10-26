import React, { Component } from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { calcWidth } from "../helper/res";

class QR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQrCode: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.qrCodeContent !== prevProps.qrCodeContent ||
      this.props.logo !== prevProps.logo
    ) {
      this.setState({ showQrCode: false }, () => {
        this.setState({ showQrCode: true });
      });
    }
  }

  render() {
    const { qrCodeContent, logo } = this.props;
    const { showQrCode } = this.state;

    return (
      qrCodeContent &&
      showQrCode && (
        <QRCode
          content={qrCodeContent}
          logo={logo}
          color={"#0802A3"}
          codeStyle="square"
          backgroundColor={"#ffffff"}
          logoSize={calcWidth(15)}
        />
      )
    );
  }
}

export default QR;
